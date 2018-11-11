<template>
  <div>
    <h1>
      Ownership Rate
    </h1>
    <h2>Set the rate at which users of the network gain ownership per transaction.</h2>
    <div class="spacer" />

    <center>
      <div style="max-width:400px;">
        <vue-slider v-model="market.equity_rate" :min=0 :max=10 :dotSize=48 height=32></vue-slider>
      </div>
    </center>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'

export default {
  components: {
    'vue-slider': vueSlider
  },
  props: ['market']
}
</script>
