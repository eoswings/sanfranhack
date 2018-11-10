const { eos, createAccount, setContract, compileContract } = require('./util')

main().catch(e => {
  console.error(e)
  process.exit(1)
})

async function main() {
  await createAccount('sanfranhack')
  await compileContract()
  await setContract('sanfranhack', '..', 'sanfranhack')

  await createAccount('user1')
  await createAccount('user2')
}
