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
              <v-list-tile-title> <a href="#" style="color:#555">settings</a> </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                <a href="#" style="color:#555">moderation</a>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title> <a href="#" style="color:#555">dispute</a> </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title> <a href="#" style="color:#555">reviews</a> </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title> <a href="#" style="color:#555">voting</a> </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title> <div style="border:1px solid #ddd; margin-top:10px;" /></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                <a href="/markets"><b>markets</b></a>
              </v-list-tile-title>
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
                <line-chart :data="lineChart1Data"></line-chart>
              </v-flex>

              <v-flex xs4 class="my-3">
                <line-chart :data="lineChart2Data"></line-chart>
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

<style>
.v-list__tile__title {
  font-size: 20px;
}
table.v-table tbody td {
  font-size: 17px;
}
</style>

<script>
import { Doughnut } from 'vue-chartjs'
import LineChart from '../components/LineChart.vue'

export default {
  components: {
    Doughnut,
    LineChart
  },

  async mounted() {
    var data = [this.marketCreatorEquity]
    var bgColor = [this.marketCreatorBgColor]

    for (var i = 0; i < this.nrStakeHolder; i++) {
      data.push((1 / this.nrStakeHolder) * 50)
      var greyFragment = (40 + i * 2).toString(16)
      bgColor.push('#' + greyFragment + greyFragment + greyFragment)
    }

    var labels = ['accounta']

    console.log(this.$refs)

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
    marketCreatorEquity: 51,
    marketCreatorBgColor: '#fda53a',
    nrStakeHolder: 3,
    lineChart1Data: {
      datasets: [
        {
          label: 'Revenue',
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          borderColor: '#fda53a',
          fill: false
        }
      ],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    lineChart2Data: {
      datasets: [
        {
          label: 'Customers',
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          borderColor: '#fda53a',
          fill: false
        }
      ],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
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
      var letters = '0123456789ABCDEF'
      var color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
  }
}
</script>
