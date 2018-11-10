const fs = require('fs')
const eosjs = require('eosjs')
const { spawn } = require('child_process')

const keypair = {
  public: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
  private: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
}

const eos = eosjs({
  httpEndpoint: 'http://localhost:8888',
  chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
  keyProvider: keypair.private
})
module.exports.eos = eos

function createAccount(name) {
  return eos.transaction(tr => {
    tr.newaccount({
      creator: 'eosio',
      name: name,
      owner: keypair.public,
      active: keypair.public
    })
  })
}
module.exports.createAccount = createAccount

async function setContract(account, contractDir, contractName) {
  const wasm = fs.readFileSync(`${contractDir}/${contractName}.wasm`)
  const abi = fs.readFileSync(`${contractDir}/${contractName}.abi`)

  await eos.setcode(account, 0, 0, wasm)
  await eos.setabi(account, JSON.parse(abi))
}
module.exports.setContract = setContract

async function compileContract() {
  await run(
    'eosio-cpp -abigen -contract=sanfranhack ../sanfranhack.cpp -o ../sanfranhack.wasm'
  )
}
module.exports.compileContract = compileContract

function run(command) {
  return new Promise(resolve => {
    const child = spawn('sh', ['-c', command], { stdio: 'inherit' })
    child.on('close', resolve)
  })
}
