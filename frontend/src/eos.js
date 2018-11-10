import eosjs from 'eosjs'
import Big from 'big.js'

export default function initEos(Vue) {
  const network = {
    protocol: 'http',
    host: 'localhost',
    port: 8888,
    chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
  }

  const eos = eosjs({
    chainId: network.chainId,
    httpEndpoint: `${network.protocol}://${network.host}:${network.port}`
  })

  eos.extractErrorMessage = error => {
    let message
    if (typeof error === 'string') {
      const parsedError = JSON.parse(error)
      if (parsedError.error) {
        message = parsedError.error.details[0].message
      } else {
        message = parsedError.message
      }
    } else {
      message = error.message
    }
    return message.charAt(0).toUpperCase() + message.slice(1)
  }
  eos.nextKey = key => {
    const encoded = eosjs.modules.format.encodeName(key, false)
    const next = Big(encoded)
      .plus(1)
      .toString()
    return eosjs.modules.format.decodeName(next, false)
  }

  Vue.mixin({
    beforeCreate() {
      this.$eos = eos
    }
  })

  return { network, eos }
}
