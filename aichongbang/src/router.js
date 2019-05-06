import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info'
import myShop from './components/shop/myShop'
import shenqin from './components/shop/shenqin'
import service from './components/service'
import goods from './components/goods'
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
        path: 'myshop',
        name: 'myshop',
        component: myShop
      },
      {
        path: 'shenqin',
        name: 'shenqin',
        component: shenqin
      },
      {
        path: 'service',
        name: 'service',
        component: service
      },
      {
        path: 'goods',
        name: 'goods',
        component: goods
      }
      ]
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
