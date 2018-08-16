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
    ],
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters: {
    // doneTodos: (state, getters) => {return (id)=>{//通过方法访问
    //   console.log(getters)
		//   return state.todos.filter(todo => todo.id===id)
    // }},
    doneTodos: (state, getters) =>(id)=>{//通过方法访问
      console.log(getters)
		  return state.todos.filter(todo => todo.id===id)
    },
    // doneTodos:(state)=>function(id){
    //   return state.todos.filter(todo => todo.id===id)
    // },

    // doneTodos:function(state){
    //   return function(id){
    //     return state.todos.filter(todo => todo.id===id)
    //   }
    // },
    doneTodosCount: (state, getters) => {//通过属性访问
        // console.log(getters)
    		return getters.doneTodos.length
    },
    saleProducts:(state,getters)=>{
      console.log(getters)
      let saleProducts = state.products.map(product=>{
        return{
          name:product.name,
          price:product.price/2
        }
      })
      return saleProducts;
    }
  },
  //我将mutaions理解为store中的methods,mutations对象小红保存着更改数据的回调函数，该函数名官方规定叫type，第一个参数是state，第二个参数事payload，也就是自定义的参数。
  mutations: {
    increment(state,payload){
      state.msg+=payload.amount;
    },
    minusPrice(state,payload){
      let newPrice = state.products.forEach(product=>{
        product.price -=payload
      })
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
  //


  //a.actions提交的是mutations而不是直接更改状态。
  //b.actions中可以包含异步操作，mutations中绝对不允许出现异步。
  //actions中的回调函数的第一个参数是content，是一个与store实例具有相同的属性和方法的对象。
  actions:{
    increment({commit},payload){
      console.log({commit})
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          commit('increment',payload)
          resolve()
        },5000);
      })
    },
    minusPriceAsync(context,payload){
      // console.log(context);
      setTimeout(()=>{
        context.commit('minusPrice',payload)
      },2000)
    }
  }

})