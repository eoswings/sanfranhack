#include <eosiolib/asset.hpp>
#include <eosiolib/eosio.hpp>
#include <string>

using eosio::asset;
using std::string;

class[[eosio::contract]] sanfranhack : public eosio::contract {
  private:
    struct [[eosio::table]] market_type {
        eosio::name id;
        eosio::name creator;
        string name;
        string description;
        uint64_t fee;
        uint64_t equity_rate;
        uint64_t primary_key() const { return id.value; }
    };
    typedef eosio::multi_index<"markets"_n, market_type> market_table;

    struct [[eosio::table]] product_type {
        eosio::name id;
        eosio::name market_id;
        eosio::name seller;
        string name;
        string description;
        asset price;
        uint64_t primary_key() const { return id.value; }
    };
    typedef eosio::multi_index<"products"_n, product_type> product_table;

  public:
    using contract::contract;

    [[eosio::action]] void createmarket(eosio::name id, eosio::name creator,
                                        string name, string description,
                                        uint64_t fee, uint64_t equity_rate) {
        eosio_assert(name.length() > 0, "Name cannot be empty");
        eosio_assert(name.length() <= 100, "Name cannot be longer than 100 characters");
        eosio_assert(description.length() <= 500, "Description cannot be longer than 500 characters");
        eosio_assert(fee < 100'000, "Fee must be less than 100 percent");
        eosio_assert(equity_rate < 100'000, "Equity rate must be less than 100 percent");

        market_table markets(_self, _self.value);

        auto existing = markets.find(id.value);
        eosio_assert(existing == markets.end(), "A market with this ID already exists");

        markets.emplace(_self, [&](auto &market) {
            market.id = id;
            market.creator = creator;
            market.name = name;
            market.description = description;
            market.fee = fee;
            market.equity_rate = equity_rate;
        });
    };

    [[eosio::action]] void listproduct(eosio::name market_id, eosio::name id, eosio::name seller,
                                       string name, string description, asset price) {
        eosio_assert(name.length() > 0, "Name cannot be empty");
        eosio_assert(name.length() <= 100, "Name cannot be longer than 100 characters");
        eosio_assert(description.length() > 0, "Description cannot be empty");
        eosio_assert(description.length() <= 500, "Description cannot be longer than 500 characters");
        eosio_assert(price.amount >= 0, "Price cannot be negative");

        market_table markets(_self, _self.value);
        auto &market = markets.get(market_id.value, "Market not found");

        product_table products(_self, _self.value);
        auto existing = products.find(id.value);
        eosio_assert(existing == products.end(), "A product with this ID already exists");

        products.emplace(_self, [&](auto &product) {
            product.id = id;
            product.market_id = market_id;
            product.seller = seller;
            product.name = name;
            product.description = description;
            product.price = price;
        });
    };

    [[eosio::action]] void buyproduct(eosio::name id, eosio::name buyer) {
        product_table products(_self, _self.value);
        auto &product = products.get(id.value, "Product not found");

        market_table markets(_self, _self.value);
        auto &market = markets.get(product.market_id.value, "Market not found");

        asset fee = product.price * market.fee / 100'000;

        eosio::action(eosio::permission_level(buyer, "active"_n),
                      "eosio.token"_n, "transfer"_n,
                      std::make_tuple(buyer, _self, fee,
                                      string("Fee for purchase of product ") + product.name));

        eosio::action(eosio::permission_level(buyer, "active"_n),
                      "eosio.token"_n, "transfer"_n,
                      std::make_tuple(buyer, product.seller, product.price - fee,
                                      string("Purchase of product ") + product.name));

        products.erase(product);
    };
};
EOSIO_DISPATCH(sanfranhack, (createmarket))
