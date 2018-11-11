<template>
  <v-app id="inspire">
    <div>
      <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
        left
        style="background-color:#eee;"
      >
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title> Settings </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title> Moderation </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title> Dispute </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title> Reviews </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar app fixed class="pl-0" style="background-color:white;">
        <img src="../assets/logo2.png" style="width:200px; padding:3em" />
      </v-toolbar>

      <v-content>
        <v-layout justify-center align-center>
          <v-container class="mb-1" align-center>
            <v-layout row wrap>
              <v-flex xs4 class="my-3">
                <h1>Volume 24h</h1>
                <div>$1000</div>
                <br /><br />
                <h1>Stakeholders</h1>
                <h2>325</h2>
              </v-flex>

              <v-flex xs4 class="my-3">
                <h1>Market Revenue</h1>
                <div>$120000</div>
              </v-flex>

              <v-flex xs4 class="my-1">
                <doughnut ref="equityDoughnut"></doughnut>
              </v-flex>
            </v-layout>
            <br />
            <br />
            <br />
            <v-layout row wrap>
              <v-flex xs5>
                <h3>Top Sellers</h3>
                <v-data-table
                  :headers="topSellerHeaders"
                  :items="topSellers"
                  hide-actions
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.totalRevenue }}</td>
                  </template>
                </v-data-table>
              </v-flex>
              <v-flex xs1> </v-flex>
              <v-flex xs5>
                <h3>Latest Sellers</h3>
                <v-data-table
                  :headers="latestSellHeaders"
                  :items="latestSells"
                  hide-actions
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.icon }}</td>
                    <td>{{ props.item.item }}</td>
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.value }}</td>
                    <td>See Detail</td>
                  </template>
                </v-data-table>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import { Doughnut } from 'vue-chartjs';

export default {
  components: {
    Doughnut
  },

  async mounted() {
    var data = [this.marketCreatorEquity]
      var bgColor = [this.marketCreatorBgColor]

      for (var i = 0; i < this.nrStakeHolder; i++) {
      data.push((1 / this.nrStakeHolder) * 100)
        var greyFragment = (40 + i * 2).toString(16)
        bgColor.push('#' + greyFragment + greyFragment + greyFragment)
      }

    var labels = ['accounta']

      this.$refs.equityDoughnut.renderChart({
      datasets: [
        {
          data: data,
          backgroundColor: bgColor
        }
      ],
      labels: labels
    })
    },

  data: () => ({
    drawer: true,
    marketCreatorEquity: 50,
    marketCreatorBgColor: '#fda53a',
    nrStakeHolder: 50,
    topSellerHeaders: [
      {
        text: 'Seller',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Total Revenue',
        align: 'left',
        sortable: false,
        value: 'totalRevenue'
      }
    ],
    topSellers: [
      { name: 'accountc', totalRevenue: '$5000' },
      { name: 'accountd', totalRevenue: '$10000' },
      { name: 'accountf', totalRevenue: '$100' }
    ],
    latestSellHeaders: [
      {
        text: '',
        align: 'left',
        sortable: false,
        value: 'icon'
      },
      {
        text: 'Item',
        align: 'left',
        sortable: false,
        value: 'item'
      },
      {
        text: 'Seller',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Value',
        align: 'left',
        sortable: false,
        value: 'value'
      },
      {
        text: 'Detail',
        align: 'left',
        sortable: false,
        value: 'detail'
      }
    ],
    latestSells: [
      { icon: '', item: 'used iphone ...', name: 'accountc', value: '$400' },
      {
        icon: '',
        item: 'brand new mac osx ...',
        name: 'accountd',
        value: '$2000'
      },
      { icon: '', item: 'usb adapter ...', name: 'accounte', value: '$100' }
    ]
  }),

  computed: {},

  methods: {
    randomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
        }
      return color
      }
  }
}
</script>
