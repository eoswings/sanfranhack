<template>

  <div class="home">
    <hr />
    <div style="padding:20px;">&nbsp;</div>
    <img alt="Vue logo" src="../assets/woman.png" style="border-radius:50%; width:100px; height:100px; ">
    <step5 />
    <div class="spacer" />
    <button class="button">Back</button>
    &nbsp; 
    <button class="button">Next</button>
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
  components: {
    step1,
    step2,
    step3,
    step4,
    step5
  }
}
</script>
