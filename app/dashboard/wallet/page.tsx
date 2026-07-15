import WalletSummary from './components/WalletSummary'
import RpcMethodCard from './components/RpcMethodCard'

async function getWallet() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/wallet/summary`, {
    next: { revalidate: 5 }
  })
  return res.json()
}

const METHODS = [
  {
    name: 'eth_getBalance',
    label: 'Get Balance',
    description: 'Reads the current ETH balance for an address.'
  },
  {
    name: 'eth_getTransactionCount',
    label: 'Get Nonce',
    description: 'Reads the transaction count (nonce) for an address.'
  },
  {
    name: 'eth_call',
    label: 'Contract Call',
    description: 'Executes a read-only call to a contract.'
  }
]

export default async function WalletRpcPage() {
  const wallet = await getWallet()

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-3">
        <WalletSummary wallet={wallet} />
      </div>

      {METHODS.map((m) => (
        <RpcMethodCard key={m.name} method={m} />
      ))}
    </div>
  )
}