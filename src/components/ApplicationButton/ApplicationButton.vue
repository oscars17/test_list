<template lang="pug">
  button.app-button(@click="triggerEvent")
    slot
</template>

<script>
  export default {
    methods: {
      triggerEvent() {
        return this.$emit('click-event')
      }
    }
  }
</script>

<style lang="sass">
  @import "app-button"
</style>