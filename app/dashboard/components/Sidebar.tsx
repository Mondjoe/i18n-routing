{/* Sidebar Sections */}
<div className="mt-2 space-y-4 px-2">

  {/* SYSTEM */}
  <div>
    <h2 className={`${collapsed ? 'hidden' : 'block'} text-xs tracking-widest text-neutral-500 mb-2`}>
      SYSTEM
    </h2>

    <SidebarLink href="/dashboard" label="Dashboard" icon={<Home size={18} />} />
    <SidebarLink href="/dashboard/node" label="Node Metrics" icon={<Activity size={18} />} />
  </div>

  {/* OPERATIONS */}
  <div>
    <h2 className={`${collapsed ? 'hidden' : 'block'} text-xs tracking-widest text-neutral-500 mb-2`}>
      OPERATIONS
    </h2>

    <SidebarLink href="/dashboard/validators" label="Validators" icon={<Server size={18} />} />
    <SidebarLink href="/dashboard/logs" label="Attestation Logs" icon={<FileText size={18} />} />
  </div>

  {/* WALLET / RPC */}
  <div>
    <h2 className={`${collapsed ? 'hidden' : 'block'} text-xs tracking-widest text-neutral-500 mb-2`}>
      WALLET
    </h2>

    <SidebarLink href="/dashboard/wallet" label="Wallet / RPC" icon={<Wallet size={18} />} />
  </div>

  {/* TERMINAL */}
  <div>
    <h2 className={`${collapsed ? 'hidden' : 'block'} text-xs tracking-widest text-neutral-500 mb-2`}>
      DEVELOPER
    </h2>

    <SidebarLink href="/terminal" label="Operator Terminal" icon={<Terminal size={18} />} />
  </div>

</div>