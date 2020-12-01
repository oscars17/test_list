<template lang="pug">
  div#app_wrapper(ref="app")
    header
        application-header(@show-app-bar="showAppBar")
    nav
      transition(
        enter-active-class="fadeIn"
        appear
        v-on:after-enter="showNavigationBar"
      )
        application-bar(
          v-show="show_app_bar"
          :show_content="show_app_bar_content"
          :app_width="app_width"
          @toggle-search="toggleSearch"
          )
          transition(
            enter-active-class="fadeInLeft"
            leave-active-class="fadeOutRight"
            appear
          )
            search-bar(
              v-show="show_search_bar"
              @toggle-search="toggleSearch"
              )
    nav
      transition(
        enter-active-class="fadeInUp"
        appear
        v-on:after-enter="showRouterBar"
      )
        navigation(v-show="show_navigation_bar")
    main
      transition(
        enter-active-class="fadeLeft"
        appear
        v-on:after-enter="showRouterBar"
      )
        router-view(v-if="show_router_bar")
    footer
</template>

<script>
  import Navigation from "@/components/Navigation/Navigation"
  import ApplicationBar from "@/components/ApplicationBar/ApplicationBar"
  import ApplicationHeader from "@/components/ApplicationHeader/ApplicationHeader"
  import SearchBar from "@/components/Search/SearchBar"
  import {mapMutations, mapState} from 'vuex'

  export default {
    components: {
      ApplicationHeader,
      ApplicationBar,
      Navigation,
      SearchBar,
    },
    data() {
      return {
        show_search_bar: false,
        show_app_bar: false,
        show_navigation_bar: false,
        show_router_bar: false,
        show_app_bar_content: false,
        app_width: 0
      }
    },
    computed: {
      ...mapState({
        scroll_position: state => state.scroll_position,
        screen_width: state => state.screen_width
      })
    },
    watch: {
      screen_width() {
        const app = this.$refs['app']
        this.app_width = app.offsetWidth
      }
    },
    mounted() {
      this.setWindowSize()
      document.addEventListener('scroll', this.setStoreScrollPosition)
      window.addEventListener("resize", this.setWindowSize)

    },
    beforeDestroy() {
      document.removeEventListener('scroll', this.setStoreScrollPosition)
      window.removeEventListener("resize", this.setWindowSize)
    },
    methods: {
      ...mapMutations({
        setScroll: 'SET_SCROLL_POSITION',
        setWindowSizeStore: 'SET_WINDOW_SIZE',
      }),
      setWindowSize() {
        const window_size_payload = {width: window.innerWidth, height: window.innerHeight}
        this.setWindowSizeStore(window_size_payload)
      },
      setStoreScrollPosition() {
        this.setScroll(window.scrollY)
      },
      toggleSearch() {
        this.show_search_bar = !this.show_search_bar
      },
      showAppBar() {
        this.show_app_bar = true
      },
      showNavigationBar() {
        this.show_navigation_bar = true
      },
      showRouterBar() {
        this.show_router_bar = true
        this.show_app_bar_content = true
      }
    },
  }
</script>

<style lang="sass">
  @import "assets/css/main"
  @import "assets/css/transitions"
</style>