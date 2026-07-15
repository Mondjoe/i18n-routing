export default function WalletSummary({ wallet }) {
  return (
    <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 mb-6">
      <h2 className="text-xl font-semibold mb-4">Wallet Summary</h2>

      <p className="text-neutral-300 mb-2">
        <strong>Address:</strong> {wallet.address}
      </p>
      <p className="text-neutral-300 mb-2">
        <strong>Network:</strong> {wallet.network}
      </p>
      <p className="text-neutral-300 mb-2">
        <strong>Balance:</strong> {wallet.balance} ETH
      </p>
      <p className="text-neutral-300 mb-2">
        <strong>Nonce:</strong> {wallet.nonce}
      </p>
    </div>
  )
}