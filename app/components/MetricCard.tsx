export default function MetricCard({ title, value }) {
  return (
    <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-300 text-xl">{value}</p>
    </div>
  )
}