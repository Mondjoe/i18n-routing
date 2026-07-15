<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

  <OperatorChart title="Attestation Performance">
    <svg width="100%" height="100%" viewBox="0 0 300 120">
      <polyline
        fill="none"
        stroke="rgba(0,255,140,0.8)"
        strokeWidth="3"
        points="10,80 50,60 90,70 130,40 170,50 210,30 250,45 290,20"
      />
    </svg>
  </OperatorChart>

  <OperatorChart title="Node Health Radar">
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <polygon
        points="100,20 170,70 150,150 50,150 30,70"
        fill="rgba(0,255,140,0.15)"
        stroke="rgba(0,255,140,0.8)"
        strokeWidth="2"
      />
    </svg>
  </OperatorChart>

</div>