<template>
<div>
  <!-- <div @click="add({amount:10})">{{$store.state.msg}}</div> -->
  <div @click="abc">{{$store.state.msg}}</div>
  <!-- <div @click="increment({amount:10})">{{$store.state.msg}}</div> -->
  <!-- <div @click="add({amount:10})">{{$store.state.msg}}</div> -->
  <div>
    <p>通过属性访问：{{doneTodosCount}}</p>
    <p>通过方法访问：{{todos}}</p>
  </div>
</div>

</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'index',
    data(){
      return {}
    },
    computed:{
      a(){
        return this.$store.state.login.msg
        // return this.$store.state.msg
      },
      todos:function() {  //通过方法访问
          return this.$store.getters.doneTodos
      },
      doneTodosCount () {
		    return this.$store.getters.doneTodosCount
      }
    },
    created(){
      const promise2 = new Promise((resolve,reject)=>{
          let a = 1
          let b = 2
          let c = 3
          resolve([a,b,c]) //中括号意味着支持 a.attr1 这样的形式，{}花括号不支持。
      })

      promise2.then(([a,b,c])=>{
          console.log(a,b,c)
      })
    },
    methods:{
      //mutations方法调用1
      // abc(){
      //   // this.$store.commit('incremnet',{
      //   //   amount:10
      //   // });
      //   this.$store.commit({
      //       type: 'incre',
      //       amount: 10
      //   })
      // }

      //mutations方法调用2
      // ...mapMutations([
      //   'increment',//将'this.increment()映射为'this.$store.commit('increment',amount)'
      //   'incre',
      // ])

      //mutations方法调用3
        // ...mapMutations({
        //   add:'increment'//将this.add()映射为this.$store.commit('increment');
        // }),


        //action类似与mutation，不同在于：Action提交的时mutation，而不是直接变更状态。Action可以包含任意异步操作。
        abc(){
          this.$store.dispatch('increment',{amount:10})
        }
        // ...mapMutations([
        //   'increment'//将this.increment()映射为this.$store.dispatch('increment')
        // ])
        // ...mapMutations({
        //   add:'increment'//将this.add()映射为this.$store.dispatch('increment')
        // })
    }
  }
</script>
<style>

</style>

