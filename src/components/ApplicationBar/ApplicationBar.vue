<template lang="pug">
  div.application-bar
    div.application-bar__action
      app-button
        div.button-text Поиск
</template>

<script>
  import ApplicationButton from "@/components/ApplicationButton/ApplicationButton"

  export default {
    name: "application-bar",
    components: {
      'app-button': ApplicationButton
    }
  }
</script>

<style lang="sass">
  @import "application-bar"
</style>