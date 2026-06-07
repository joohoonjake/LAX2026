'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import type { DayEntry } from '@/data/travel'

const STORAGE_KEY = 'lax2026-diary'

function sleepingColor(sleeping: string): string {
  if (sleeping.includes('조슈아')) return 'bg-amber-50 text-amber-800'
  if (sleeping.includes('샌디에고')) return 'bg-blue-50 text-blue-800'
  if (sleeping.includes('디즈니')) return 'bg-purple-50 text-purple-800'
  return 'bg-neutral-100 text-neutral-600'
}

function AutoResizeTextarea({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }, [value])

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={1}
      className="w-full resize-none overflow-hidden bg-transparent text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none leading-relaxed"
    />
  )
}

function loadDiaries(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

export default function DailyScheduleWithDiary({
  schedule,
}: {
  schedule: DayEntry[]
}) {
  const [saved, setSaved] = useState<Record<string, string>>(loadDiaries)
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [editing, setEditing] = useState<Record<string, boolean>>({})

  const openEdit = useCallback((date: string, savedText: string) => {
    setDrafts((prev) => ({ ...prev, [date]: savedText }))
    setEditing((prev) => ({ ...prev, [date]: true }))
  }, [])

  const closeEdit = useCallback((date: string) => {
    setEditing((prev) => ({ ...prev, [date]: false }))
  }, [])

  const handleSave = useCallback((date: string) => {
    const text = drafts[date] ?? ''
    setSaved((prev) => {
      const next = { ...prev, [date]: text }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
    setEditing((prev) => ({ ...prev, [date]: false }))
  }, [drafts])

  return (
    <div className="space-y-2">
      {schedule.map((day) => {
        const savedText = saved[day.date] ?? ''
        const draft = drafts[day.date] ?? ''
        const isEditing = editing[day.date] ?? false
        const hasDiary = savedText.trim().length > 0

        return (
          <div
            key={day.date}
            className={`rounded-xl border transition-all ${
              day.isMovingDay
                ? 'border-l-4 border-[#0F6E56] bg-[#0F6E56]/5 border-r border-t border-b border-neutral-200'
                : 'border-neutral-200 bg-white'
            }`}
          >
            {/* Top row */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              {/* Date */}
              <div className="flex-shrink-0 w-full sm:w-28">
                <span className="font-semibold text-sm text-neutral-900">{day.date}</span>
                <span className="text-xs text-neutral-500 ml-1">{day.dayLabel}</span>
              </div>

              {/* Sleeping badge */}
              <div className="flex-shrink-0 sm:w-32">
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${sleepingColor(day.sleeping)}`}
                >
                  {day.sleeping}
                </span>
              </div>

              {/* Memo + edit button */}
              <div className="flex-1 flex items-start justify-between gap-2">
                {day.memo && (
                  <div className="text-sm text-neutral-600 leading-relaxed flex-1">
                    {day.memo}
                  </div>
                )}
                {!day.memo && <div className="flex-1" />}
                {!isEditing && (
                  <button
                    onClick={() => openEdit(day.date, savedText)}
                    className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      hasDiary
                        ? 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-400 hover:bg-neutral-100'
                    }`}
                  >
                    {hasDiary ? '✏️ 기록 있음' : '✏️ 기록'}
                  </button>
                )}
              </div>
            </div>

            {/* Diary area */}
            {isEditing && (
              <div className="px-4 pb-4 border-t border-dashed border-neutral-200 pt-3">
                <AutoResizeTextarea
                  value={draft}
                  onChange={(v) => setDrafts((prev) => ({ ...prev, [day.date]: v }))}
                  placeholder="오늘 뭘 했는지 기록해봐요..."
                />
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    onClick={() => closeEdit(day.date)}
                    className="text-xs px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-500 hover:bg-neutral-50 transition-colors"
                  >
                    닫기
                  </button>
                  <button
                    onClick={() => handleSave(day.date)}
                    className="text-xs px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
                  >
                    저장
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
