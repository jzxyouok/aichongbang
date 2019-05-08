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
import shopMan from './components/shop/shopMan'
import showUser from './components/platform/showUser'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/login',
      name: 'login1',
      component: login,
    },
    {
      path: '/login/:username',
      name: 'loginWithParams',
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
      {
        path: 'shopMan',
        name: 'shopMan',
        component: shopMan
      },
      {
        path: 'showUser',
        name: 'showUser',
        component: showUser
      },
      ]
    },
    {
      path: '/infoP',
      name: 'InfoP',
      component: () => import(/* webpackChunkName: "info" */ './views/infoP.vue'),
      children: [{//配置子路由的地方
        path: 'myshop',
        name: 'Pmyshop',
        component: myShop
      },
      {
        path: 'shenqin',
        name: 'Pshenqin',
        component: shenqin
      },
      {
        path: 'addservice',
        name: 'PaddService',
        component: addService
      },
      {
        path: 'showservice',
        name: 'PshowService',
        component: showService
      },
      {
        path: 'goods',
        name: 'Pgoods',
        component: goods
      },
      {
        path: 'pet',
        name: 'Ppet',
        component: pet
      },
      {
        path: 'auditUser',
        name: 'PauditUser',
        component: auditUser
      },
      {
        path: 'auditShop',
        name: 'PauditShop',
        component: auditShop
      },
      {
        path: 'shopMan',
        name: 'PshopMan',
        component: shopMan
      },
      {
        path: 'showUser',
        name: 'PshowUser',
        component: showUser
      },
      ]
    },
  ]
})
