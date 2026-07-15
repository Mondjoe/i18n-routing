import CpuChart from './components/CpuChart'
import RamChart from './components/RamChart'
import DiskChart from './components/DiskChart'
import NetworkChart from './components/NetworkChart'

async function getNodeMetrics() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/node/metrics`, {
    next: { revalidate: 5 }
  })
  return res.json()
}

export default async function NodeMetricsPage() {
  const metrics = await getNodeMetrics()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <CpuChart data={metrics.cpu} />
      <RamChart data={metrics.ram} />
      <DiskChart data={metrics.disk} />
      <NetworkChart data={metrics.network} />
    </div>
  )
}