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
                    src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c2f65a2019b066f34061dfe4afb41bb4&auto=format&fit=crop&w=400&q=60"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">California Craft Beers</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">2 Members</span><br />
                      <span>A market place for local craft brewers.</span>
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
                    src="https://images.unsplash.com/photo-1527016021513-b09758b777bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0ff89d00bb062148746339baf2bfc79&auto=format&fit=crop&w=400&q=60"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">Second Hand Stores</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">872 members</span><br />
                      <span>A market place for used clothing.</span>
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
                    src="https://images.unsplash.com/photo-1527690789675-4ea7d8da4fe3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c04b2389a38ee6886ceebba1f12f65c&auto=format&fit=crop&w=400&q=80"
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
                      <span class="grey--text">4095 members</span><br />
                      <span>Market for trading video game assets.</span>
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
