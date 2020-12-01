<template lang="pug">
  div.application-bar-wrap(
    :class="scroll_position > 100 ? 'fixed-bar' : ''"
    :style="{'width': app_width + 'px'}"
    )
    div.application-bar
      div.application-bar__action
        transition(
          enter-active-class="fadeIn"
          leave-active-class="fadeOut"
          appear
        )
          pagination(v-show='show_pagination')
      div.application-bar__action
        transition(
          enter-active-class="fadeInRight"
          leave-active-class="fadeOutLeft"
          appear
        )
          app-button(
            v-show="show_search"
            @on-click="$emit('toggle-search')"
            )
            div.button-text поиск
    slot
</template>

<script>
  import ApplicationButton from "@/components/ApplicationButton/ApplicationButton"
  import Pagination from "@/components/Pagination/Pagination"
  import { mapState } from 'vuex'

  export default {
    name: "application-bar",
    components: {
      Pagination,
      'app-button': ApplicationButton
    },
    props: {
      show_content: {
        type: Boolean,
        default: false
      },
      app_width: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        show_search: false,
        show_pagination: false,
      }
    },
    computed: {
      ...mapState({
        scroll_position: state => state.scroll_position
      }),
    },
    watch: {
      show_content(bool) {
        if (bool) {
          this.show_search = true
          this.show_pagination = true
          const pos_search_text = this.$route.query.search_text
          if (pos_search_text) this.$emit('toggle-search')
        }
      }
    },
  }
</script>

<style lang="sass">
  @import "application-bar"
</style>