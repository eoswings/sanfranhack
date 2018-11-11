<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        clipped
        temporary
        fixed
        app
        right
        class="blue-grey"
    >
      <v-list>
          <v-list-tile>
              <v-list-tile-content>                
                <v-list-tile-title>
                    Settings
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-content>                
                <v-list-tile-title>
                    Moderation
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-content>                
                <v-list-tile-title>
                    Dispute
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-content>                
                <v-list-tile-title>
                    Reviews
                </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-right class="blue-grey darken-4">
        <v-layout class="wrap mr-1">
            <v-toolbar-title class="mt-2">
                Más
            </v-toolbar-title>
        </v-layout>
    </v-toolbar>

    <v-container class="pt-1">
        <v-layout row wrap>
            <v-flex xs3 class="mb-3">
              <h3>Volume 24h</h3>
              <div>1000$</div>
            </v-flex>

            <v-flex xs3 class="mb-3">
              <h3>Market Revenue</h3>
              <div>120000$</div>
            </v-flex>

            <v-flex xs3 class="my-1">
              <h3>Distribution ownership</h3>
              <doughnut ref="equityDoughnut"></doughnut>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>

import { Doughnut } from "vue-chartjs"

export default {
  components: {
    Doughnut
  },

  async mounted() {
    
  },

  data: () => ({

  }),

  computed: {
  },

  methods: {
    randomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  }
};
</script>