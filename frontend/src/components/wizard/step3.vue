<template>
        <div>

            <h1>
                Description
            </h1>
            <h2>In a sentence or two, tell us what members of your market will trade.</h2>

            <div class="spacer" />
            <textarea v-model="market.description" rows="3"></textarea>
        </div>
    </template>

<script>
export default {
  name: 'step3',
  props: ['market']
}
</script>
