<template lang="pug">
    ul.data-rows
      data-element(
        v-for="(element, index) in rows"
        :key="createKey(element.date, index)"
        :index="index"
        :data="element"
        )
</template>

<script>
  import { mapState } from 'vuex'
  import DataElement from "@/components/DataRows/DataElement/DataElement"

  export default {
    name: "data-rows",
    components: {
      DataElement
    },
    computed: {
      ...mapState({
        rows: state => state.rows
      })
    },
  }
</script>

<style lang="sass">
  @import "data-rows"
</style>