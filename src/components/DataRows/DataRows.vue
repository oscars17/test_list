<template lang="pug">
    ul.data-rows
      data-element(
        v-for="(element, index) in list_page"
        :key="createKey(element.date, index)"
        :index="index"
        :data="element"
        )
</template>

<script>
  import { mapState } from 'vuex'
  import DataElement from "@/components/DataRows/DataElement/DataElement"

  export default {
    name: "data-rows",
    components: {
      DataElement
    },
    computed: {
      ...mapState({
        rows: state => state.rows,
        page: state => state.pagination.page,
        el_per_page: state => state.pagination.el_per_page
      }),
      list_page() {
        return this.rows.slice(this.el_per_page * (this.page - 1), this.el_per_page * this.page)
      }
    },
    watch: {
      page(data) {
        const query = {page: data}
        return this.$router.push({query: query})
      }
    }
  }
</script>

<style lang="sass">
  @import "data-rows"
</style>