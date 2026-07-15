export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
        <h2 className="text-xl font-semibold mb-2">Validator Status</h2>
        <p className="text-neutral-400">Online • Syncing • Healthy</p>
      </div>

      <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
        <h2 className="text-xl font-semibold mb-2">Node Metrics</h2>
        <p className="text-neutral-400">CPU • RAM • Disk • Network</p>
      </div>

      <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
        <h2 className="text-xl font-semibold mb-2">Attestation Logs</h2>
        <p className="text-neutral-400">Performance • Missed • Included</p>
      </div>
    </div>
  )
}