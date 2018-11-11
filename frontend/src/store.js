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
    account: null
  },
  mutations: {
    setAccount(state, account) {
      state.account = account
    }
  },
  actions: {
    async createMarket({ state }, market) {
      await eos.transaction(state.config.contractAccount, tr => {
        tr.createmarket(market, { authorization: `${state.account}@active` })
      })
    }
  }
})
