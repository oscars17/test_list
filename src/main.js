import Vue from 'vue'
import App from './App.vue'
import transactions from './data/transactions.csv'

import store from './store/index'
import keyMixin from "./mixins/keyMixin"

Vue.config.productionTip = false

Vue.mixin(keyMixin)

new Vue({
  store,
  render: h => h(App),
  async created() {
    await store.dispatch('setData', transactions)
  },
}).$mount('#app')
