import InfoCard from '@/components/ui/InfoCard'
import { restaurants, vegFriendly, type Restaurant } from '@/data/travel'

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function RestaurantRow({ r }: { r: Restaurant }) {
  return (
    <div className="py-3.5 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {/* Name + tags */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-neutral-900">{r.name}</span>
            <span className="text-xs text-neutral-400">{r.cuisine}</span>
            {r.top && (
              <span className="bg-[#0F6E56]/10 text-[#0F6E56] text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                강추
              </span>
            )}
            {r.tags?.map((t) => (
              <span
                key={t}
                className="bg-neutral-100 text-neutral-500 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          {/* Note */}
          <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{r.note}</p>
        </div>
        {/* Google map link */}
        <a
          href={mapsUrl(r.mapQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-[#0F6E56] hover:text-[#0a5642] border border-[#0F6E56]/20 hover:border-[#0F6E56]/40 rounded-full px-2.5 py-1 transition-colors"
        >
          📍 지도
        </a>
      </div>
    </div>
  )
}

export default function LaJollaFoodPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            🍽 라호야 맛집 추천
          </h1>
        </div>
        <p className="text-sm text-neutral-500">
          숙소 근처 라호야 + 운전해서 갈 만한 샌디에고 맛집
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-700">
            현지인 추천 정리
          </span>
          <span className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-700">
            🌱 채식 옵션 표시
          </span>
        </div>
      </div>

      {/* Intro */}
      <InfoCard highlight={false} className="bg-[#0F6E56]/[0.03]">
        <div className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed">
          <span className="flex-shrink-0">💬</span>
          <p>
            Reddit{' '}
            <span className="font-medium text-neutral-800">r/FoodSanDiego</span>의 &ldquo;라호야 근처에
            머무는데 운전해서라도 갈 만한 괜찮은 레스토랑 추천&rdquo; 글의 댓글을 정리했어요. 각 항목의{' '}
            <span className="text-[#0F6E56] font-medium">📍 지도</span> 버튼을 누르면 구글 지도로 바로
            연결됩니다.
          </p>
        </div>
      </InfoCard>

      {/* La Jolla top picks */}
      <InfoCard title="🏖 라호야 안에서 — 베스트">
        <div className="divide-y divide-neutral-100">
          {restaurants.laJolla.map((r) => (
            <RestaurantRow key={r.name} r={r} />
          ))}
        </div>
      </InfoCard>

      {/* La Jolla more */}
      <InfoCard title="🏖 라호야 안에서 — 더 보기">
        <div className="divide-y divide-neutral-100">
          {restaurants.laJollaMore.map((r) => (
            <RestaurantRow key={r.name} r={r} />
          ))}
        </div>
      </InfoCard>

      {/* Drive worth it */}
      <InfoCard title="🚗 운전해서 갈 만한 곳">
        <div className="space-y-5">
          {restaurants.drive.map((group) => (
            <div key={group.area}>
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800 mb-1">
                <span>{group.emoji}</span> {group.area}
              </div>
              <div className="pl-6 divide-y divide-neutral-100">
                {group.items.map((r) => (
                  <RestaurantRow key={r.name} r={r} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </InfoCard>

      {/* Veg friendly */}
      <InfoCard title="🌱 채식 친화 추가 추천">
        <p className="text-sm text-neutral-500 mb-3">
          채식 위주라면 참고할 만한 곳들 (현지인 추가 리스트)
        </p>
        <div className="space-y-3">
          {vegFriendly.map((cat) => (
            <div key={cat.label} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-xs font-medium text-neutral-400 w-20 flex-shrink-0">
                {cat.label}
              </span>
              <span className="text-sm text-neutral-700">{cat.items.join(' · ')}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      {/* Summary tip */}
      <InfoCard highlight>
        <div className="flex items-start gap-2 text-sm text-neutral-700 leading-relaxed">
          <span className="flex-shrink-0">⭐</span>
          <p>
            <span className="font-semibold">한 줄 결론</span> — 라호야 안에서만 고른다면{' '}
            <span className="font-medium text-[#0F6E56]">
              Catania(이탈리안) · Callie · Marine Room(뷰·파인다이닝) · George&apos;s at the Cove(선셋)
            </span>{' '}
            가 가장 안전한 픽이에요.
          </p>
        </div>
      </InfoCard>
    </div>
  )
}
