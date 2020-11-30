<template lang="pug">
  div#app_wrapper
    header
      application-header
    nav
      application-bar
    nav
      navigation
    main
      router-view
    footer
</template>

<script>
  import Navigation from "@/components/Navigation/Navigation"
  import ApplicationBar from "@/components/ApplicationBar/ApplicationBar"
  import ApplicationHeader from "@/components/ApplicationHeader/ApplicationHeader"
  import { mapMutations } from 'vuex'

  export default {
    components: {
      ApplicationHeader,
      ApplicationBar,
      Navigation,
    },
    mounted() {
      document.addEventListener('scroll', this.setStoreScrollPosition)
    },
    beforeDestroy() {
      document.removeEventListener('scroll', this.setStoreScrollPosition)
    },
    methods: {
      ...mapMutations({
        setScroll: 'SET_SCROLL_POSITION'
      }),
      setStoreScrollPosition() {
        this.setScroll(window.scrollY)
      }
    },
  }
</script>

<style lang="sass">
  @import "assets/css/main"
</style>