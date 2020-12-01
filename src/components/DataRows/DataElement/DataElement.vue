<template lang="pug">
  transition(:enter-active-class="transition_name" appear)
    div.data-rows__element(v-observe-visibility="showElement" v-show="show")
      ul.data-element.grid-row
        li.data-element__column(v-for="col in Object.keys(data)" :key="createKey(col, index)") {{data[col]}}
</template>

<script>
  export default {
    name: "data-element",
    data() {
      return {
        show: false,
        loaded: false,
        name: ''
      }
    },
    props: {
      data: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
      transition_name: {
        type: String,
        required: true
      }
    },
    methods: {
      showElement() {
        this.show = true
      },
    }
  }
</script>

<style lang="sass">

</style>
