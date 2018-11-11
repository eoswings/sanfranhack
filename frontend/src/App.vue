<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setAccount', 'user1')
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}

h1 {
  font-size: 50px;
  margin-bottom:0.2em;
  color: #555;
}

h2 {
  font-size: 25px;
  color: #333;
}

input, textarea {
  font-size:40px;
  padding:10px;
  border:1px solid #ddd;
}

.next_button {

  -moz-box-shadow: inset 0px 1px 0px 0px #fce2c1;
  -webkit-box-shadow: inset 0px 1px 0px 0px #fce2c1;
  box-shadow: inset 0px 1px 0px 0px #fce2c1;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #ffc477),
    color-stop(1, #fb9e25)
  );
  background: -moz-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
  background: -webkit-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
  background: -o-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
  background: -ms-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
  background: linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc477', endColorstr='#fb9e25', GradientType=0);
  background-color: #ffc477;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #eeb44f;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  padding: 20px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #cc9f52;
}

.next_button:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #fb9e25),
    color-stop(1, #ffc477)
  );
  background: -moz-linear-gradient(top, #fb9e25 5%, #ffc477 100%);
  background: -webkit-linear-gradient(top, #fb9e25 5%, #ffc477 100%);
  background: -o-linear-gradient(top, #fb9e25 5%, #ffc477 100%);
  background: -ms-linear-gradient(top, #fb9e25 5%, #ffc477 100%);
  background: linear-gradient(to bottom, #fb9e25 5%, #ffc477 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fb9e25', endColorstr='#ffc477', GradientType=0);
  background-color: #fb9e25;
}

.next_button:active {
  position: relative;
  top: 1px;
}

.back_button {
  border: 0;
  cursor: pointer;
  font-size: 16px;
}
.spacer {
  padding: 25px;
}

.spacer {
  padding: 25px;
}

.underline {
  border-bottom: 1px dashed #ccc;
}

.fade-enter-active {
  transition-delay:1s;
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
