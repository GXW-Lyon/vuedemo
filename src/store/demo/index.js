const state = {
  useName: "sam",
  msg:1
};
const mutations = {
  incre(state,payload){
    console.log(state.msg)
    state.msg+=payload.amount;
  }
};
const actions = {
 
};
const getters = {
 
};
 
// 不要忘记把state, mutations等暴露出去。
export default {
  state,
  mutations,
  actions,
  getters
}