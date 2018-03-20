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
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})