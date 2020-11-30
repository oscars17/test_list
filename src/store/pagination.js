export default {
    state: {
        page: 1,
        num_pages: 1,
        el_per_page: 30,
        prev_page_chunk: [],
        next_page_chunk: []
    },
    mutations: {
        SET_PAGE(state, page) {
            state.page = page
        },
        SET_NUM_PAGES(state, list_length) {
            state.num_pages = Math.ceil(list_length / state.el_per_page)
        },
        SET_PREV_PAGE_CHUNK(state) {
            state.prev_page_chunk = []
            for (let i = state.page - 1; i > 0 && i > state.page - 3 ; i--) {
                state.prev_page_chunk.unshift(i)
            }
        },
        SET_NEXT_PAGE_CHUNK(state) {
            state.next_page_chunk = []
            for (let i = state.page + 1; i <= state.num_pages && i < state.page + 3; i++) {
                state.next_page_chunk.push(i)
            }
        }
    },
    actions: {
        setPageChunks({commit}) {
            commit('SET_PREV_PAGE_CHUNK')
            commit('SET_NEXT_PAGE_CHUNK')
        },
        setPaginationStructure({commit, dispatch}, list_length) {
            commit('SET_NUM_PAGES', list_length)
            dispatch('setPageChunks')
        }
    },
}
