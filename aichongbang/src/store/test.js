import { fetchPost } from '../server/fetch'
export default {
  namespaced: true,
  state: {
    currentPage: 1,
    eachPage: 1,
    shops: [],
    totalPage: 0,
    count: 0
  },
  mutations: {
    getShopByPage: (state, payload) => {
      Object.assign(state, payload)
      //这样也可以。因为我们不能把payload直接赋值给state.只有state身上的属性是响应式的。
      // for (let k in payload) {
      //     state[k] = payload[k]
      // }
    },
    setEachPage: (state, eachPage) => state.eachPage = eachPage,
    setCurrentPage: (state, currentPage) => state.currentPage = currentPage,

  },
  actions: {
    async getShopByPageAsync(context) {
      const { currentPage, eachPage, count } = context.state
      var data = await fetchPost('/shop/getShop', { currentPage, eachPage }).then(res => res)
      context.commit('getShopByPage', data)//将获取到的数据利用mutations更新到state中。
      console.log(data);
    },
    async auditPass(context, id) {
      const { currentPage, eachPage, count } = context.state
      var data = await fetchPost('/shop/auditShop', id).then(res => res)
      if (data.ok == 1) {
        var data = await fetchPost('/shop/getShop', { currentPage, eachPage }).then(res => res)
        context.commit('getShopByPage', data)//将获取到的数据利用mutations更新到state中。
        return true;
      }
    }
  }
}