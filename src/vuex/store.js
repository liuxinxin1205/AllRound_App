import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    title:'电影',
    color:'#e54847',
    dataList: []
}

const mutations = {
    routerLinks(state,params){
        state.title = params.title;        
        state.color = params.color;
    },
    setDataList(state, status){
        state.photoList = status;
    }
}

const actions = {
    setDataListAction({commit}, status){
        commit('setDataList', status);
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})