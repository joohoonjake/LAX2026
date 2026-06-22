'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'lax2026-packing'

interface PackingData {
  text: string
  checked: string[]
}

function loadPacking(): PackingData {
  if (typeof window === 'undefined') return { text: '', checked: [] }
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    return {
      text: typeof parsed.text === 'string' ? parsed.text : '',
      checked: Array.isArray(parsed.checked) ? parsed.checked : [],
    }
  } catch {
    return { text: '', checked: [] }
  }
}

function parseItems(text: string): string[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
}

export default function PackingList() {
  const [data, setData] = useState<PackingData>(loadPacking)
  const [editing, setEditing] = useState(() => loadPacking().text.trim().length === 0)
  const [draft, setDraft] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize the textarea while editing
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }, [draft, editing])

  const persist = useCallback((next: PackingData) => {
    setData(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore storage errors
    }
  }, [])

  const openEdit = useCallback(() => {
    setDraft(data.text)
    setEditing(true)
  }, [data.text])

  const handleSave = useCallback(() => {
    const items = parseItems(draft)
    // keep only checks that still correspond to an existing item
    const checked = data.checked.filter((c) => items.includes(c))
    persist({ text: draft, checked })
    setEditing(false)
  }, [draft, data.checked, persist])

  const toggle = useCallback(
    (item: string) => {
      const checked = data.checked.includes(item)
        ? data.checked.filter((c) => c !== item)
        : [...data.checked, item]
      persist({ ...data, checked })
    },
    [data, persist]
  )

  const items = parseItems(data.text)
  const checkedCount = items.filter((i) => data.checked.includes(i)).length

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6">
      {editing ? (
        <>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-700">준비물 적기</span>
            <span className="text-xs text-neutral-400">한 줄에 하나씩</span>
          </div>
          {/* Notepad-style input */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            <textarea
              ref={textareaRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={'여권\n아기 분유\n자외선 차단제\n보조 배터리\n...'}
              rows={6}
              autoFocus
              className="w-full resize-none overflow-hidden bg-transparent text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none leading-relaxed"
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            {data.text.trim().length > 0 && (
              <button
                onClick={() => setEditing(false)}
                className="text-xs px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-500 hover:bg-neutral-50 transition-colors"
              >
                취소
              </button>
            )}
            <button
              onClick={handleSave}
              className="text-xs px-4 py-1.5 rounded-full bg-[#0F6E56] text-white hover:bg-[#0c5a47] transition-colors"
            >
              확인
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs text-neutral-400">
              {checkedCount} / {items.length} 챙김
            </span>
            <button
              onClick={openEdit}
              className="text-xs px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-500 hover:bg-neutral-50 transition-colors"
            >
              ✏️ 편집
            </button>
          </div>

          {items.length === 0 ? (
            <div className="py-8 text-center text-sm text-neutral-400">
              아직 적은 준비물이 없어요.
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item, i) => {
                const isChecked = data.checked.includes(item)
                return (
                  <li key={`${item}-${i}`} className="flex items-center gap-3">
                    <button
                      onClick={() => toggle(item)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        isChecked
                          ? 'bg-[#0F6E56] border-[#0F6E56]'
                          : 'border-neutral-300 bg-white hover:border-[#0F6E56]'
                      }`}
                    >
                      {isChecked && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                    <span
                      className={`text-sm ${
                        isChecked ? 'line-through text-neutral-400' : 'text-neutral-700'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                )
              })}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
