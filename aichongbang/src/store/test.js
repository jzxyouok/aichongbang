export default {
    namespaced: true,
    state: {
      index: 3,
      filter: "ALL",
      todos: [
        {
          id: 0,
          text: "HTML",
          completed: false,
          flag: true
        },
        {
          id: 1,
          text: "CSS",
          completed: true,
          flag: true
        },
        {
          id: 2,
          text: "JAVASCRIPT",
          completed: false,
          flag: true
        }
      ]
    },
    //Vuex允许我们在商店中定义“getters”。您可以将它们视为商店的计算属性。
    //与计算属性一样，getter的结果基于其依赖性进行缓存，
    //并且只会在其某些依赖项发生更改时重新进行评估。
    getters: {
      filterData(state) {
        switch (state.filter) {
          case "COMPLETED":
            return state.todos.filter(e => e.completed && e.flag);
          case "ACTIVE":
            return state.todos.filter(e => !e.completed && e.flag);
          default:
            return state.todos.filter(e => e.flag);
        }
      },
      total(state) {
        return state.todos.filter(e => e.flag).length;
      },
      completedTotal(state) {
        return state.todos.filter(e => e.completed && e.flag).length;
      }
    },
    mutations: {
      completedTodo(state, item) {
        item.completed = !item.completed;
      },
      addTodo(state, text) {
        if (text) {
          state.todos.push({
            id: state.index++,
            text,
            completed: false,
            flag: true
          });
        }
      },
      toggle(state, filter) {
        state.filter = filter;
      },
      removeItem(state, item) {
        item.flag = !item.flag;
      },
  
  
    },
    actions: {
  
    }
  }