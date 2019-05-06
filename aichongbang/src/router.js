import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: () => import(/* webpackChunkName: "info" */ './views/Info.vue'),
      beforeEnter: (to, from, next) => {
        // console.log('info路由独享守卫');
        next()//next控制是否允许进入该路径，接收参数，布尔值，默认true.
      },
      children: [{//配置子路由的地方
        path: 'counter',
        name: 'Counter',
        component: Counter
      }, {
        path: 'todoList',
        name: 'TodoList',
        component: TodoList
      }, {
        path: 'movies',
        name: 'Movie',
        component: Movie
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
