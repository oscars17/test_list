import Vue from 'vue'
import App from './App.vue'
import transactions from './data/transactions.csv'

import store from './store/index'
import router from './router/index'
import VueObserveVisibility from 'vue-observe-visibility'
import keyMixin from "./mixins/keyMixin"


Vue.config.productionTip = false

Vue.mixin(keyMixin)
Vue.use(VueObserveVisibility)

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    store.dispatch('setData', transactions)
    store.commit('SET_INITIAL_LOADING')
  },
}).$mount('#app')
