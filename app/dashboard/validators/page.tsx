import ValidatorCard from './components/ValidatorCard'
import MetricCard from './components/MetricCard'

async function getValidatorInfo() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/validator/info`, {
    next: { revalidate: 5 }
  })
  return res.json()
}

export default async function ValidatorMetricsPage() {
  const info = await getValidatorInfo()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <ValidatorCard info={info} />

      <MetricCard title="Attestation Rate" value={info.performance.attestationRate} />
      <MetricCard title="Inclusion Delay" value={info.performance.inclusionDelay} />
      <MetricCard title="Sync Participation" value={info.performance.syncParticipation} />
      <MetricCard title="Uptime" value={info.uptime} />
      <MetricCard title="Slashing Risk" value={info.slashingRisk} />
    </div>
  )
}