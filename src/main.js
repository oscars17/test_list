import Vue from 'vue'
import App from './App.vue'
import transactions from './data/transactions.csv'

import store from './store/index'
import router from './router/index'
import keyMixin from "./mixins/keyMixin"

Vue.config.productionTip = false

Vue.mixin(keyMixin)

new Vue({
  store,
  router,
  render: h => h(App),
  async created() {
    await store.dispatch('setData', transactions)
  },
}).$mount('#app')
