import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoApp from "../components/TodoApp.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoApp
  },
]

const router = new VueRouter({
  routes
})

export default router
