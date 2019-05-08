import { fetchPost } from '../server/fetch'
export default {
  namespaced: true,
  state: {
    currentPage: 1,
    eachPage: 4,
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
    setPage: (state, eachPage) => state.eachPage = eachPage,
    setCurrentPage: (state, currentPage) => state.currentPage = currentPage,

  },
  actions: {
    async getShopByIdAsync(context,userID) {
      const { currentPage, eachPage, count } = context.state
      var data = await fetchPost('/shop/getShopByuserId', { currentPage, eachPage,userID }).then(res => res)
      console.log(data)
      context.commit('getShopByPage', data)//将获取到的数据利用mutations更新到state中。
    },
  }
}