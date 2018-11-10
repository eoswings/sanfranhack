import Vue from 'vue'
import Vuex from 'vuex'
import initEos from './eos'

const { network, eos } = initEos(Vue)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {
      network,
      contractAccount: 'sanfranhack'
    },
    account: null,
    balance: null
  },
  mutations: {
    setAccount(state, account) {
      state.account = account
    },
    setBalance(state, balance) {
      state.balance = balance
    }
  },
  actions: {
    async logIn({ state, commit, dispatch }, account) {
      commit('setAccount', account)
      await dispatch('loadBalance')
    },
    logOut({ commit }) {
      commit('setAccount', null)
    },
    async loadBalance({ state, commit }) {
      commit(
        'setBalance',
        (await eos.getCurrencyBalance(
          'eosio.token',
          state.account,
          'EOS'
        ))[0] || '0.0000 EOS'
      )
    }
  }
})
