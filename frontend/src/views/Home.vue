<template style="text-align:center;">
  <v-app id="inspire">
    <div style="text-align:left; width:100%;">
      <img src="../assets/logo2.png" style="width:200px; padding:1.5em" />
    </div>
    <div>
      <v-content align-center>
        <v-layout justify-center align-center>
          <v-container class="mb-1" align-center>
            <v-layout row wrap>
              <v-flex xs12 class="my-3">
                <v-text-field
                  solo
                  class="white--text"
                  append-icon="search"
                  label="search..."
                ></v-text-field>
              </v-flex>

              <v-flex xs3 class="my-3">
                <v-card>
                  <v-img
                    class="white--text"
                    height="200px"
                    src="../assets/fm.png"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">Farmers Markets</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">3250 members</span><br />
                      <span>Whitehaven Beach</span><br />
                      <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex xs1 class="my-3"> </v-flex>

              <v-flex xs3 class="my-3">
                <v-card>
                  <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">Second hand stores</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">872 members</span><br />
                      <span>Whitehaven Beach</span><br />
                      <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex xs1 class="my-3"> </v-flex>

              <v-flex xs3 class="my-3">
                <v-card>
                  <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">In-Game Digital Assets</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">95 members</span><br />
                      <span>Whitehaven Beach</span><br />
                      <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  components: {},

  async mounted() {},

  data: () => ({}),

  computed: {},

  methods: {}
}
</script>
