<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

  <OperatorMetricCard
    label="Attestation Rate"
    value={`${info.performance.attestationRate}%`}
    icon={<Activity size={22} />}
  />

  <OperatorMetricCard
    label="Inclusion Delay"
    value={`${info.performance.inclusionDelay} ms`}
    icon={<Gauge size={22} />}
  />

  <OperatorMetricCard
    label="Sync Participation"
    value={`${info.performance.syncParticipation}%`}
    icon={<Zap size={22} />}
  />

  <OperatorMetricCard
    label="Slashing Risk"
    value={info.slashingRisk}
    icon={<Shield size={22} />}
  />

</div>