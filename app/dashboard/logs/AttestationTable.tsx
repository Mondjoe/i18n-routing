import AttestationRow from './AttestationRow'

export default function AttestationTable({ logs }) {
  return (
    <div className="rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-neutral-950">
          <tr>
            <th className="p-3 text-neutral-400">Epoch</th>
            <th className="p-3 text-neutral-400">Slot</th>
            <th className="p-3 text-neutral-400">Status</th>
            <th className="p-3 text-neutral-400">Inclusion Delay</th>
            <th className="p-3 text-neutral-400">Source</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log, idx) => (
            <AttestationRow key={idx} log={log} />
          ))}
        </tbody>
      </table>
    </div>
  )
}