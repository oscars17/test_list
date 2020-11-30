import Vuex from 'vuex'
import Vue from 'vue'
import pagination from "./pagination"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      pagination: pagination
    },
    state: {
        scroll_position: 0,
        column_names: [],
        rows: [],
    },
    mutations: {
        SET_SCROLL_POSITION(state, payload) {
            state.scroll_position = payload
        },
        SET_COLUMN_NAMES(state, payload) {
            state.column_names = Object.keys(payload)
        },
        SET_ROWS(state, payload) {
            state.rows = payload
        }
    },
    actions: {
        async setData({commit}, payload) {
            const first_element = payload[0]
            commit('SET_COLUMN_NAMES', first_element)
            commit('SET_ROWS', payload)
        }
    },
    getters: {
        list_length: (state) => state.rows.length,
    }
})

export default store
