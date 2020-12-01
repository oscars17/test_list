<template lang="pug">
  transition(
    enter-active-class="fadeInDown"
    appear
    v-on:after-enter="showAppBar"
    )
    div.application-header(v-show="initial_loading")
      img.application-header__img(:src="'https://wow.zamimg.com/uploads/guide/seo/10223.jpg?1588115725'")
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "application-header",
    computed: {
      ...mapState({
        initial_loading: state => state.initial_loading
      })
    },
    methods: {
      showAppBar() {
        this.$emit('show-app-bar')
      }
    }
    }
</script>

<style lang="sass">
  @import "app-header"
</style>