'use client'

import { useState } from 'react'

export default function RpcMethodCard({ method }) {
  const [params, setParams] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const runMethod = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/rpc/call`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: method.name,
          params: params ? JSON.parse(params) : []
        })
      })
      const data = await res.json()
      setResult(JSON.stringify(data.result, null, 2))
    } catch (e) {
      setResult('Error running RPC method')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
      <h3 className="text-lg font-semibold mb-2">{method.label}</h3>
      <p className="text-neutral-400 text-sm mb-3">{method.description}</p>

      <textarea
        className="w-full bg-neutral-950 text-neutral-200 p-3 rounded border border-neutral-700 mb-3 text-sm"
        rows={3}
        placeholder='["0xValidatorAddress", "latest"]'
        value={params}
        onChange={(e) => setParams(e.target.value)}
      />

      <button
        onClick={runMethod}
        disabled={loading}
        className="px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-sm font-medium"
      >
        {loading ? 'Running…' : 'Run RPC'}
      </button>

      {result && (
        <pre className="mt-3 text-xs text-neutral-300 bg-neutral-950 p-3 rounded border border-neutral-800 whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </div>
  )
}