<template lang="pug">
  div.data-rows__element
    ul.data-element.grid-row
      li.data-element__column(v-for="col in Object.keys(data)" :key="createKey(col, index)") {{data[col]}}
</template>

<script>
  export default {
    name: "data-element",
    props: {
      data: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
  }
</script>

<style lang="sass">

</style>
