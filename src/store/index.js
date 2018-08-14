import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import demo from "./demo"
export default new vuex.Store({
  modules: {
    login: demo
  },
  state:{
    msg:1,
    count:0,
    todos:[
      { id: 1, text: '水果类', done: true },
			{ id: 2, text: '苹果', done: true },
			{ id: 3, text: '苹果', done: true}
    ]
  },
  getters: {
    doneTodos: (state, getters) => {//通过方法访问
      console.log(getters)
		  return state.todos.filter(todo => todo.done)
		},
    doneTodosCount: (state, getters) => {//通过属性访问
        // console.log(getters)
    		return getters.doneTodos.length
  		}
	},
  mutations: {
    increment(state,payload){
      state.msg+=payload.amount;
    }
  },
  // actions:{
  //   //action函数接受一个与store实例具有相同方法和属性的content对象，因此可以调用content.commit提交一个mutation，或则通过content.state和content.getters来获取state和getters。
  //   increment(context,payload){
  //     context.commit('increment',payload)
  //   }
  // },
  //实践中，我们经常会用的es2015的参数解构来简化代码(特别是我们需要调用commit很多次的时候)
  // actions:{
  //   increment({commit,dispatch},payload){
  //     console.log({commit,dispatch})
  //     commit('increment',payload)
  //   }
  // },
  // actions:{
  //   increment({commit}){
  //     console.log(dispatch(increment))
  //     commit('increment')
  //   }
  // },
  actions:{
    increment({commit},payload){
      console.log({commit})
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          commit('increment',payload)
          resolve()
        },5000);
      })
    }
  }

})