<template lang="pug">
  div.pagination
    div.pagination__pages
      div.pagination__start(@click="setPage(1)") начало
    div.pagination__prev(@click="setPage(Math.max(page - 1, 1))") налево
    div.pagination__page(
      v-for="page in prev_page_chunk"
      :key="page"
      @click="setPage(page)"
    ) {{page}}
    div.pagination__page.active-page {{this.page}}
    div.pagination__page(
      v-for="page in next_page_chunk"
      :key="page"
      @click="setPage(page)"
    ) {{page}}
    div.pagination__next(@click="setPage(Math.min(page + 1, num_pages))") направо
    div.pagination__end(@click="setPage(num_pages)") конец
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

  export default {
    name: "pagination",
    computed: {
      ...mapState({
        num_pages: state => state.pagination.num_pages,
        prev_page_chunk: state => state.pagination.prev_page_chunk,
        next_page_chunk: state => state.pagination.next_page_chunk,
      }),
      page: {
        get() {
          return this.$store.state.pagination.page
        },
        set(data) {
          this.setPage(data)
        }
      },
      ...mapGetters(['list_length']),
    },
    watch: {
      '$route.query'() {
        this.setPaginationStructure(this.list_length)
      },
      '$route.query.search_text'(){
        this.setPage(1)
      },
      page(data) {
        if (data == this.$route.query.page) return
        this.$router.push({name: 'main', query: Object.assign({}, this.$route.query, {page: data})})
        this.setPageChunks()
      },
      list_length(data) {
        this.setPaginationStructure(data)
        this.setPageChunks()
      }
    },
    created() {
      const query_page = this.$route.query.page
      if (query_page) this.page = parseInt(query_page)
      this.setPaginationStructure(this.list_length)
    },
    methods: {
      ...mapMutations({
        setPage: 'SET_PAGE',
        setNumPages: 'SET_NUM_PAGES'
      }),
      ...mapActions({
        setPaginationStructure: 'setPaginationStructure',
        setPageChunks: 'setPageChunks'
      })
    },
  }
</script>

<style lang="sass">
  @import "pagination"
</style>