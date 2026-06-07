import InfoCard from '@/components/ui/InfoCard'
import MapEmbed from '@/components/ui/MapEmbed'
import { accommodations } from '@/data/travel'

const acc = accommodations[2] // id: 'disney-hotel'

export default function DisneyHotelPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          {acc.emoji} {acc.name}
        </h1>
        <p className="text-sm text-neutral-500">{acc.subtitle}</p>

        {/* Stat pills */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-700">
            체크인 {acc.checkIn}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-700">
            체크아웃 {acc.checkOut}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-700">
            {acc.nights}박
          </span>
        </div>
      </div>

      {/* Main info card */}
      <InfoCard highlight={false}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-neutral-400 mb-1">체크인</div>
            <div className="text-lg font-semibold text-[#0F6E56]">{acc.checkIn}</div>
          </div>
          <div>
            <div className="text-xs text-neutral-400 mb-1">체크아웃</div>
            <div className="text-lg font-semibold text-neutral-700">{acc.checkOut}</div>
          </div>
        </div>
        <div className="mt-4 text-sm text-neutral-500">
          총 {acc.nights}박
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2">
          <a
            href={`https://maps.google.com/maps?q=${encodeURIComponent(acc.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-neutral-700 hover:text-[#0F6E56] transition-colors"
          >
            <span className="flex-shrink-0 mt-0.5">📍</span>
            <span className="underline underline-offset-2">{acc.address}</span>
          </a>
          <div className="flex items-center gap-2 text-sm text-[#0F6E56] font-medium">
            <span>🚶</span>
            <span>디즈니랜드까지 도보 8분</span>
          </div>
        </div>
      </InfoCard>

      {/* Map embed */}
      <InfoCard title="위치">
        <MapEmbed query={acc.mapQuery} height={260} />
      </InfoCard>

      {/* Disney guide */}
      <InfoCard title="디즈니랜드 이용 안내">
        <div className="space-y-5">
          {/* Schedule */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🎢</span> 방문 일정
            </div>
            <div className="pl-6 space-y-0.5 text-sm text-neutral-600">
              <div>8/4 (화) · 8/5 (수) 이틀 방문</div>
              <div>체크인 8/3 당일은 이동일이라 방문 없음</div>
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Getting there */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🚶</span> 호텔 → 디즈니랜드
            </div>
            <div className="pl-6 text-sm text-neutral-600 space-y-0.5">
              <div>도보로 약 8분 (Harbor Blvd 따라 북쪽)</div>
              <div>호텔 셔틀 서비스 운영 여부 체크인 시 확인</div>
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Nap strategy */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>☀️</span> 낮잠 전략
            </div>
            <div className="pl-6 text-sm text-neutral-600 space-y-0.5">
              <div>낮에 더우면 호텔로 돌아와 아기 낮잠 재우기</div>
              <div>저녁에 다시 입장 — 멀티데이 티켓은 당일 재입장 가능</div>
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Nearby */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🗺️</span> 주변
            </div>
            <div className="pl-6 text-sm text-neutral-600 space-y-0.5">
              <div>Downtown Disney: 도보 5분 (쇼핑·레스토랑, 무료 입장)</div>
              <div>California Adventure: 디즈니랜드 바로 옆</div>
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Parking */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🚗</span> 주차
            </div>
            <div className="pl-6 text-sm text-neutral-600">
              호텔 주차장 이용 권장 — 디즈니랜드 자체 주차장은 비쌈
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  )
}
