<template lang="pug">
  div.application-bar
    div.application-bar__action
      pagination
    div.application-bar__action
      app-button
        div.button-text Поиск
</template>

<script>
  import ApplicationButton from "@/components/ApplicationButton/ApplicationButton"
  import Pagination from "@/components/Pagination/Pagination"

  export default {
    name: "application-bar",
    components: {
      Pagination,
      'app-button': ApplicationButton
    }
  }
</script>

<style lang="sass">
  @import "application-bar"
</style>