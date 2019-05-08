import Vue from 'vue'
import Router from 'vue-router'
import Info from './views/Info'
import myShop from './components/shop/myShop'
import shenqin from './components/shop/shenqin'
import service from './components/service'
import goods from './components/goods/addGoods.vue'
import addService from './components/serve/addService.vue'
import showService from './components/serve/showService.vue'
import goods from './components/goods'
import pet from './components/pet'
import addpet from './components/petShop/addpet.vue'
import querythePet from './components/petShop/querythePet.vue'
import reg from './views/reg'
import login from './views/login'
import auditUser from './components/platform/auditUser'
import auditShop from './components/shop/auditShop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
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
        path: 'addservice',
        name: 'addService',
        component: addService
      },
      {
        path: 'showservice',
        name: 'showService',
        component: showService
      },
      {
        path: 'goods',
        name: 'goods',
        component: goods
      },
      {
        path: 'shenqin',
        name: 'shenqin',
        component: shenqin
      },
      {
        path: 'pet',
        name: 'pet',
        component: pet
      },
      {
        path:"addpet",
        name:"addpet",
        component:addpet
      },
      {
        path:"querythePet",
        name:"querythePet",
        component:querythePet
      },{
        path: 'auditUser',
        name: 'auditUser',
        component: auditUser
      },
      {
        path: 'auditShop',
        name: 'auditShop',
        component: auditShop
      },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
