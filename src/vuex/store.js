import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const state = {
    active: true
}

const mutations = {
    _toggleActive(state) {
        state.active = !state.active;
    },
    getActive(state) {
        return state.active
    }
}

const actions = {
    toggleActive({ commit }) {
        commit('_toggleActive')
    },
    subscribeMsg({ commit }, mobileph) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('成功向服务器添加订阅电话：' + mobileph);
                resolve('订阅成功');
            }, 1000)
        })
       
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})