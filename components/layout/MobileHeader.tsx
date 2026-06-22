'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { emoji: '🗓', label: '전체 일정', href: '/' },
  { emoji: '🎒', label: '준비물', href: '/packing' },
  { emoji: '✈️', label: '비행기표', href: '/flight' },
  { emoji: '🚗', label: 'Tesla Model Y', href: '/car' },
  { emoji: '📶', label: 'e-SIM', href: '/esim' },
  { divider: '숙소' },
  { emoji: '🌵', label: '조슈아 트리', href: '/joshua-tree' },
  { emoji: '🏖', label: '라호야', href: '/la-jolla' },
  { emoji: '🏰', label: '디즈니랜드 호텔', href: '/disney-hotel' },
  { emoji: '🛫', label: '마지막날 숙소', href: '/airport-hotel' },
  { divider: '명소' },
  { emoji: '🎢', label: '디즈니랜드', href: '/disneyland' },
] as const

type NavItem =
  | { emoji: string; label: string; href: string; divider?: never }
  | { divider: string; emoji?: never; label?: never; href?: never }

const pageNames: Record<string, string> = {
  '/': '전체 일정',
  '/packing': '준비물',
  '/flight': '비행기표',
  '/car': 'Tesla Model Y',
  '/esim': 'e-SIM',
  '/joshua-tree': '조슈아 트리',
  '/la-jolla': '라호야',
  '/disney-hotel': '디즈니랜드 호텔',
  '/airport-hotel': '마지막날 숙소',
  '/disneyland': '디즈니랜드',
}

export default function MobileHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const currentPage = pageNames[pathname] ?? ''

  return (
    <header className="md:hidden sticky top-0 z-30">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-neutral-200">
        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="메뉴 열기"
          className="p-1 -ml-1 text-neutral-700"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Title */}
        <span className="text-[#0F6E56] font-semibold">LAX 2026</span>

        {/* Current page name */}
        <span className="text-sm text-neutral-500">{currentPage}</span>
      </div>

      {/* Drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex">
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div className="relative w-[260px] h-full bg-white flex flex-col shadow-xl">
            {/* Drawer header */}
            <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <div className="text-[#0F6E56] font-semibold text-lg leading-tight">LAX 2026</div>
                <div className="text-neutral-500 text-xs mt-0.5">가족여행</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="메뉴 닫기"
                className="p-1 text-neutral-500"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto py-3">
              {(navItems as readonly NavItem[]).map((item, i) => {
                if ('divider' in item && item.divider) {
                  return (
                    <div
                      key={`divider-${i}`}
                      className="text-[10px] font-medium uppercase tracking-widest text-neutral-400 px-6 pt-4 pb-1"
                    >
                      {item.divider}
                    </div>
                  )
                }

                if (!('href' in item) || !item.href) return null

                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg mx-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-[#0F6E56]/10 text-[#0F6E56] font-medium'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
