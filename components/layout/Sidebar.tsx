'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { emoji: '🗓', label: '전체 일정', href: '/' },
  { emoji: '✈️', label: '비행기표', href: '/flight' },
  { emoji: '🚗', label: 'Tesla Model Y', href: '/car' },
  { divider: '숙소' },
  { emoji: '🌵', label: '조슈아 트리', href: '/joshua-tree' },
  { emoji: '🏖', label: '라호야', href: '/la-jolla' },
  { emoji: '🏰', label: '디즈니 호텔', href: '/disney-hotel' },
  { emoji: '🛫', label: '마지막날 숙소', href: '/airport-hotel' },
  { divider: '명소' },
  { emoji: '🎢', label: '디즈니랜드', href: '/disneyland' },
] as const

type NavItem =
  | { emoji: string; label: string; href: string; divider?: never }
  | { divider: string; emoji?: never; label?: never; href?: never }

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-[260px] fixed left-0 top-0 h-full bg-white border-r border-neutral-200 flex-col z-30">
      {/* Header */}
      <div className="px-6 py-5 border-b border-neutral-100">
        <div className="text-[#0F6E56] font-semibold text-lg leading-tight">LAX 2026</div>
        <div className="text-neutral-500 text-xs mt-0.5">가족여행</div>
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
    </aside>
  )
}
