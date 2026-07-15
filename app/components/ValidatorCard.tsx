export default function ValidatorCard({ info }) {
  return (
    <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
      <h2 className="text-xl font-bold mb-4">Validator #{info.index}</h2>

      <p className="text-neutral-400 mb-2">
        <strong>Status:</strong> {info.status}
      </p>

      <p className="text-neutral-400 mb-2">
        <strong>Public Key:</strong> {info.publicKey}
      </p>

      <p className="text-neutral-400 mb-2">
        <strong>Effective Balance:</strong> {info.effectiveBalance} ETH
      </p>

      <p className="text-neutral-400 mb-2">
        <strong>Network:</strong> {info.network}
      </p>
    </div>
  )
}