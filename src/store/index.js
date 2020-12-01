import Vuex from 'vuex'
import Vue from 'vue'
import pagination from "./pagination"

Vue.use(Vuex)

const default_state = {
    default_data: [],
    screen_width: 0,
    screen_height: 0,
    scroll_position: 0,
    column_names: [],
    rows: [],
    searched_rows: [],
    search_text: '',
    initial_loading: false
}

const store = new Vuex.Store({
    modules: {
      pagination: pagination
    },
    state: Object.assign({}, default_state),
    mutations: {
        SET_DEFAULT_DATA(state, payload) {
            state.default_data = payload
        },
        SET_SCROLL_POSITION(state, payload) {
            state.scroll_position = payload
        },
        SET_WINDOW_SIZE(state, payload) {
            state.screen_width = payload.width
            state.screen_height = payload.height
        },
        SET_COLUMN_NAMES(state, payload) {
            state.column_names = Object.keys(payload)
        },
        SET_ROWS(state, payload) {
            state.rows = []
            state.rows = payload
        },
        ORDER_ROWS() { //todo
        },
        SET_SEARCH_TEXT(state, text) {
            state.search_text = text
        },
        SET_INITIAL_LOADING(state) {
            state.initial_loading = true
        }
    },
    actions: {
        setData({commit}, payload) {
            const first_element = payload[0]
            commit('SET_COLUMN_NAMES', first_element)
            payload = payload.map(element => Object.assign(
                element,
                {date: new Date(element.date).toLocaleString()}))
            commit('SET_DEFAULT_DATA', payload)
            commit('SET_ROWS', payload)
        },
        filterRows({commit, state}) {
            if (state.search_text.length === 0) commit('SET_ROWS', state.default_data)
            const lowercased_text = state.search_text.toLowerCase()
            const filtered_rows  = state.default_data.filter(elem =>
                elem.date.indexOf(lowercased_text) !== -1 ||
                toString(elem.ordercurrency).toLowerCase().indexOf(lowercased_text) !== -1 ||
                toString(elem.amount).indexOf(lowercased_text) !== -1 ||
                toString(elem.merchantfee).indexOf(lowercased_text) !== -1)
            commit('SET_ROWS', filtered_rows)
        }
    },
    getters: {
        list_length: (state) => state.rows.length,
    }
})

export default store
