<template>
    <div>

        <h1>
            Market Name
        </h1>
        <h2>Give your new market a one or two word name.</h2>

        <div class="spacer" />
        <input type="text" v-model="market.name" placeholder="Second Handys">

    </div>
</template>

<script>
export default {
  props: ['market'],
  name: 'step2'
}
</script>
