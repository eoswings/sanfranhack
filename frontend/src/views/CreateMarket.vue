<template>

  <div class="home">
    <div style="text-align:left; width:100%;">
        <img src="../assets/logo2.png" style="width:200px; padding:1.5em">
    </div>
    <div style="text-align:center">
      <div class="spacer" />
      <div v-if="!loading">
        <img alt="Vue logo" src="../assets/woman.png" style="border-radius:50%; width:100px; height:100px;">
      </div>
      <div v-else>
        <v-btn color="primary" fab dark :loading="true">
        </v-btn>
      </div>
      <step1 v-if="step === 1"/>
      <step2 v-else-if="step === 2" :market="market"/>
      <step3 v-else-if="step === 3" :market="market" />
      <step4 v-else-if="step === 4" :market="market" />
      <step5 v-else-if="step === 5" :market="market" />
      <div class="spacer" />

      <button class="back_button" v-if="step != 1" @click="step--">Back</button>
      <span v-if="step != 1">&nbsp; &nbsp; &nbsp;</span>
      <button class="next_button" v-if="step < 5" @click="step++">Next</button>
      <button class="next_button" :disabled="loading" v-if="step === 5" @click="deploy()">Deploy</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import step1 from '@/components/wizard/step1.vue'
import step2 from '@/components/wizard/step2.vue'
import step3 from '@/components/wizard/step3.vue'
import step4 from '@/components/wizard/step4.vue'
import step5 from '@/components/wizard/step5.vue'

export default {
  name: 'home',
  components: { step1, step2, step3, step4, step5 },
  data() {
    return {
      step: 1,
      loading: false,
      market: {
        name: 'California Craft Beer',
        description: 'Buy and sell the best craft and home brews of the region',
        fee: 0.25,
        equity_rate: 5
      }
    }
  },
  methods: {
    async deploy() {
      this.loading = true
      let market = {
        id: Math.floor(Math.random() * 2 ** 64),
        creator: this.$store.state.account,
        ...this.market,
        fee: this.market.fee * 100000
      }
      console.log(market)
      await this.$store.dispatch('createMarket', market)

      this.$router.push('/dashboard')
    }
  }
}
</script>
