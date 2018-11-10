#include <eosiolib/eosio.hpp>
#include <string>

using eosio::name;
using std::string;

class[[eosio::contract]] sanfranhack : public eosio::contract {
  private:
    struct [[eosio::table]] story_type {
        name id;
        string title;
        string content;
        uint64_t primary_key() const { return id.value; }
    };
    typedef eosio::multi_index<"stories"_n, story_type> stories_table;

  public:
    using contract::contract;

    [[eosio::action]] void createstory(name id, string title) {
        // Check if title is too long
        eosio_assert(title.length() <= 80, "Title should be at most 80 characters long");

        // Instantiate stories table
        stories_table stories(_self, _self.value);

        // Check if the story ID is already in use
        auto existing = stories.find(id.value);
        eosio_assert(existing == stories.end(), "A story with this ID already exists");

        // Everything went well, let's save the new story in the DB
        stories.emplace(_self, [&](auto &story) {
            story.id = id;
            story.title = title;
        });
    };
};
EOSIO_DISPATCH(sanfranhack, (createstory))
