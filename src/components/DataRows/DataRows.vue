<template lang="pug">
    ul.data-rows(v-if="!loading")
      data-element(
        v-for="(element, index) in list_page"
        :key="createKey(element.date, index)"
        :index="index"
        :transition_name="generateTransitionArr(index)"
        :data="element"
        )
</template>

<script>
  import { mapState, mapActions, mapMutations} from 'vuex'
  import DataElement from "@/components/DataRows/DataElement/DataElement"

  export default {
    name: "data-rows",
    components: {
      DataElement
    },
    data() {
      return {
        loading: false,
      }
    },
    computed: {
      ...mapState({
        rows: state => state.rows,
        page: state => state.pagination.page,
        search_text: state => state.search_text,
        el_per_page: state => state.pagination.el_per_page,
        default_data: state => state.default_data

      }),
      list_page() {
        return this.rows.slice(this.el_per_page * (this.page - 1), this.el_per_page * this.page)
      },
    },
    watch: {
      '$route.query'(data) {
        this.loading = true
        if (data.search_text && data.search_text.length > 0) {
          this.filterRows()
        }
        else {
          this.setRows(this.default_data)
        }
        this.$nextTick(() => this.loading = false)

      },
      search_text(data) {
        let new_query = {}
        if (data.length !== 0) {
          new_query.search_text = data
          this.$router.push({name: 'main', query: Object.assign({}, this.$route.query, new_query)}).catch(() => this.filterRows())
        }
        else {
          this.$router.push({name: 'main', query: Object.assign({})}).catch(() => {})
        }
      }
    },
    created() {
      const pos_search_text = this.$route.query.search_text
      if (pos_search_text) this.setSearchText(pos_search_text)
    },
    methods: {
      ...mapMutations({
        setRows: 'SET_ROWS',
        setSearchText: 'SET_SEARCH_TEXT'
      }),
      ...mapActions({
        filterRows: 'filterRows',
      }),
      generateTransitionArr(index) {
        return index / 2 === Math.floor(index / 2) ? 'fadeInDown' : 'fadeInUp'
      },
    }
  }
</script>

<style lang="sass">
  @import "data-rows"
</style>