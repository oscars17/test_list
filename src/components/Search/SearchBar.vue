<template lang="pug">
  div.search
    div.search__col
      input.search-input(v-model="search_text" @keydown.enter="setSearch")
    div.search__col
      application-button(@on-click="setSearch")
        div.button-text поиск
    div.search__col
      application-button(@on-click="toggleSearch")
        div.button-text отмена
    div.search__col.active-page(v-if="store_search_text") {{'Результат: ' + this.list_length}}
</template>

<script>
  import ApplicationButton from "@/components/ApplicationButton/ApplicationButton"
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: "search-bar",
    components: {
      'application-button': ApplicationButton,
    },
    data() {
      return {
        search_text: ''
      }
    },
    computed: {
      ...mapGetters(['list_length']),
      ...mapState({
        store_search_text: state => state.search_text
      })
    },
    created() {
      const pos_search_text = this.$route.query.search_text
      if (pos_search_text) this.search_text = pos_search_text
    },
    methods: {
      toggleSearch() {
        this.search_text = ''
        this.setSearch()
        this.$emit('toggle-search')
      },
      setSearch() {
        this.$store.commit('SET_SEARCH_TEXT', this.search_text)
      }
    }
  }
</script>

<style lang="sass">
  @import "search"
</style>