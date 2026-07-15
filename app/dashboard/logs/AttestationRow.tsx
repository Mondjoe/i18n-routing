export default function AttestationRow({ log }) {
  return (
    <tr className="border-b border-neutral-800">
      <td className="p-3 text-neutral-300">{log.epoch}</td>
      <td className="p-3 text-neutral-300">{log.slot}</td>
      <td className="p-3 text-neutral-300">{log.status}</td>
      <td className="p-3 text-neutral-300">{log.inclusionDelay}</td>
      <td className="p-3 text-neutral-300">{log.source}</td>
    </tr>
  )
}