import VueRouter from 'vue-router'
import Vue from 'vue'
import MainView from "@/views/MainView"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: MainView,
    name: 'main'
}]

const router = new VueRouter({routes, mode: 'history'})

export default router
