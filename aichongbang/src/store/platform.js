import { fetchPost } from '../server/fetch'
export default {
    namespaced: true,
    state: {
        currentPage: 1,
        eachPage: 1,
        users: [],
        totalPage: 0,
        count: 0
    },
    mutations: {
        getUserByPage: (state, payload) => {
            Object.assign(state, payload)
        },
        setEachPage: (state, eachPage) => state.eachPage = eachPage,
        setCurrentPage: (state, currentPage) => state.currentPage = currentPage,

    },
    actions: {
        async getUserByPageAsync(context) {
            const { currentPage, eachPage, count } = context.state
            var data = await fetchPost('/user/getUser', { currentPage, eachPage, userStatus: 0 }).then(res => res)
            context.commit('getUserByPage', data)//将获取到的数据利用mutations更新到state中。
            console.log(data);
        },
        async getAllUserByPageAsync(context) {
            const { currentPage, eachPage, count } = context.state
            var data = await fetchPost('/user/getUser', { currentPage, eachPage }).then(res => res)
            context.commit('getUserByPage', data)//将获取到的数据利用mutations更新到state中。
            console.log(data);
        },
        async auditPass(context, id) {
            const { currentPage, eachPage, count } = context.state
            var data = await fetchPost('/user/updateUser', id).then(res => res)
            if (data.ok == 1) {
                var data = await fetchPost('/user/getUser', { currentPage, eachPage, userStatus: 0 }).then(res => res)
                context.commit('getUserByPage', data)//将获取到的数据利用mutations更新到state中。
                return true;
            }
        }
    }
}