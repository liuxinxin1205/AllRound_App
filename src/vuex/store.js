import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    title:'电影',
    color:'#e54847',
}

const mutations = {
    routerLinks(state,params){
        state.title = params.title;        
        state.color = params.color;
    }
}

export default new Vuex.Store({
    state,
    mutations
})