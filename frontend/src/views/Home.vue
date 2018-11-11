<template>

  <div class="home">
    <hr />
    <div style="padding:20px;">&nbsp;</div>
    <img alt="Vue logo" src="../assets/woman.png" style="border-radius:50%; width:100px; height:100px; ">
    <step1 />
  </div>
</template>

<script>
  // @ is an alias to /src
  import step1 from '@/components/wizard/step1.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld,
      step1
    }
  }
</script>