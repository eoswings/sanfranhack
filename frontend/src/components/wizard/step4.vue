<template>
        <div>

            <h1>
                Fee Percentage
            </h1>
            <h2>Set a fee for each transaction. Fees are shared amount stakeholders.</h2>

            <div class="spacer" />
            <input type="text" placeholder="0.25" v-model="market.fee" style="width:120px;"> % (Fee)

        </div>
    </template>

<script>
export default {
  name: 'step4',
  props: ['market']
}
</script>
