import AttestationTable from './components/AttestationTable'

async function getLogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/validator/logs`, {
    next: { revalidate: 5 }
  })
  return res.json()
}

export default async function AttestationLogsPage() {
  const logs = await getLogs()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Attestation Logs</h1>

      <AttestationTable logs={logs} />
    </div>
  )
}