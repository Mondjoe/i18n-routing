export default function TerminalOutput({ cmd, output }) {
  return (
    <div className="text-green-500 operator-title">
  operator@charm:~$ {cmd}
</div>
      <pre className="text-green-300 whitespace-pre-wrap mt-1">
        {output}
      </pre>
    </div>
  )
}