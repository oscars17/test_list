<template lang="pug">
  ul.navigation.grid-row
    li.navigation__element(v-for="name in column_names" :key="name") {{name}}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "navigation",
    computed: {
      ...mapState({
        column_names: state => state.column_names
      })
    }
  }
</script>

<style lang="sass">
  @import "navigation"
</style>
