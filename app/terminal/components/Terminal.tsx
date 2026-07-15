<div className="operator-terminal-frame">
  {/* Operator Terminal Header */}
  <div className="operator-terminal-header">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-400 rounded-full operator-pulse"></div>
      <span className="operator-title">CharmCapsule Terminal</span>
    </div>

    <span className="operator-badge">SOVEREIGN MODE</span>
  </div>

  {/* Terminal Output */}
  <div className="operator-terminal-output">
    {history.map((item, idx) => (
      <TerminalOutput key={idx} cmd={item.cmd} output={item.output} />
    ))}
  </div>

  {/* Terminal Input */}
  <TerminalInput onCommand={runCommand} />

  {/* Terminal Watermark */}
  <div className="operator-terminal-watermark">
    CHARM CAPSULE // OPERATOR
  </div>
</div>