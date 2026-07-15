{/* HUD: Top Right System Status */}
<div className="operator-hud-top-right">
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 bg-green-400 rounded-full operator-pulse"></div>
    <span className="operator-badge">SYSTEM ONLINE</span>
  </div>
  <span className="operator-badge">MAINNET</span>
</div>

{/* HUD: Bottom Left Node Info */}
<div className="operator-hud-bottom-left">
  <span className="operator-badge">NODE SYNC</span>
  <div className="flex items-center gap-2 mt-1">
    <div className="w-2 h-2 bg-green-300 rounded-full operator-pulse"></div>
    <span className="operator-badge">SLOT STREAM ACTIVE</span>
  </div>
</div>

{/* HUD: Center Pulse */}
<div className="operator-hud-center">
  <div className="operator-hud-center-pulse"></div>
</div>