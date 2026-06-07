'use client'

import { useState, useEffect } from 'react'

interface ChecklistItem {
  id: string
  label: string
}

interface ChecklistProps {
  storageKey: string
  items: ChecklistItem[]
  title?: string
}

export default function Checklist({ storageKey, items, title }: ChecklistProps) {
  const [checked, setChecked] = useState<string[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        setChecked(JSON.parse(stored))
      }
    } catch {
      // ignore parse errors
    }
  }, [storageKey])

  function toggle(id: string) {
    setChecked(prev => {
      const next = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        // ignore storage errors
      }
      return next
    })
  }

  function reset() {
    setChecked([])
    try {
      localStorage.removeItem(storageKey)
    } catch {
      // ignore storage errors
    }
  }

  const count = checked.length
  const total = items.length

  return (
    <div>
      {title && (
        <h2 className="text-base font-medium text-neutral-900 mb-3 tracking-tight">
          {title}
        </h2>
      )}

      <div className="flex items-center justify-end mb-3">
        <span className="text-xs text-neutral-400">{count} / {total} 완료</span>
      </div>

      <ul className="space-y-3">
        {items.map(item => {
          const isChecked = checked.includes(item.id)
          return (
            <li key={item.id} className="flex items-center gap-3">
              <button
                onClick={() => toggle(item.id)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  isChecked
                    ? 'bg-[#0F6E56] border-[#0F6E56]'
                    : 'border-neutral-300 bg-white hover:border-[#0F6E56]'
                }`}
              >
                {isChecked && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <span
                className={`text-sm ${
                  isChecked ? 'line-through text-neutral-400' : 'text-neutral-700'
                }`}
              >
                {item.label}
              </span>
            </li>
          )
        })}
      </ul>

      <div className="mt-4 flex justify-end">
        <button
          onClick={reset}
          className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          전체 초기화
        </button>
      </div>
    </div>
  )
}
