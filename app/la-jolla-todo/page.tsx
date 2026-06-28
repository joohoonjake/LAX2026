import InfoCard from '@/components/ui/InfoCard'
import { laJollaSpots, laJollaTips, sdNearby, type Spot } from '@/data/travel'

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function SpotRow({ s }: { s: Spot }) {
  return (
    <div className="py-3.5 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {/* Name + tags */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-neutral-900">{s.name}</span>
            {s.free && (
              <span className="bg-[#0F6E56]/10 text-[#0F6E56] text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                무료
              </span>
            )}
            {s.tags
              ?.filter((t) => t !== '무료')
              .map((t) => (
                <span
                  key={t}
                  className="bg-neutral-100 text-neutral-500 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
          </div>
          {/* Description */}
          <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
        </div>
        {/* Google map link */}
        {s.mapQuery && (
          <a
            href={mapsUrl(s.mapQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-[#0F6E56] hover:text-[#0a5642] border border-[#0F6E56]/20 hover:border-[#0F6E56]/40 rounded-full px-2.5 py-1 transition-colors"
          >
            📍 지도
          </a>
        )}
      </div>
    </div>
  )
}

export default function LaJollaTodoPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            🗺 라호야 해볼 것
          </h1>
        </div>
        <p className="text-sm text-neutral-500">
          라호야 명소부터 근처 샌디에고 데이트립까지 현지인 추천 정리
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-700">
            현지인 추천 정리
          </span>
          <span className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-700">
            🟢 무료 표시
          </span>
        </div>
      </div>

      {/* Intro */}
      <InfoCard highlight={false} className="bg-[#0F6E56]/[0.03]">
        <div className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed">
          <span className="flex-shrink-0">💬</span>
          <p>
            Reddit{' '}
            <span className="font-medium text-neutral-800">r/asksandiego</span>의 라호야·샌디에고 여행
            추천 글들의 댓글을 정리했어요. 각 항목의{' '}
            <span className="text-[#0F6E56] font-medium">📍 지도</span> 버튼을 누르면 구글 지도로 바로
            연결됩니다.
          </p>
        </div>
      </InfoCard>

      {/* Tips */}
      <InfoCard title="💡 알아두면 좋은 것">
        <div className="space-y-2.5">
          {laJollaTips.map((tip) => (
            <div key={tip.text} className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed">
              <span className="flex-shrink-0">{tip.emoji}</span>
              <span>{tip.text}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      {/* La Jolla categories */}
      {laJollaSpots.map((group) => (
        <InfoCard key={group.category} title={`${group.emoji} ${group.category}`}>
          <div className="divide-y divide-neutral-100">
            {group.items.map((s) => (
              <SpotRow key={s.name} s={s} />
            ))}
          </div>
        </InfoCard>
      ))}

      {/* Nearby San Diego day trips */}
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
            🚗 라호야 근처 · 샌디에고 데이트립
          </h2>
        </div>
        <p className="text-sm text-neutral-500">
          숙소를 베이스로 차로 다녀올 만한 곳들 (코로나도·포인트로마·발보아·노스카운티)
        </p>
      </div>
      {sdNearby.map((group) => (
        <InfoCard key={group.category} title={`${group.emoji} ${group.category}`}>
          <div className="divide-y divide-neutral-100">
            {group.items.map((s) => (
              <SpotRow key={s.name} s={s} />
            ))}
          </div>
        </InfoCard>
      ))}

      {/* Summary tip */}
      <InfoCard highlight>
        <div className="flex items-start gap-2 text-sm text-neutral-700 leading-relaxed">
          <span className="flex-shrink-0">⭐</span>
          <p>
            <span className="font-semibold">반나절~하루 추천 동선</span> — Cottage 아침 → Girard Ave
            쇼핑 →{' '}
            <span className="font-medium text-[#0F6E56]">
              Cove에서 Marine St 해안 산책
            </span>{' '}
            → Cave Store 동굴 → Bobboi 젤라토 → 글라이더포트/Mount Soledad에서 선셋.
          </p>
        </div>
      </InfoCard>
    </div>
  )
}
