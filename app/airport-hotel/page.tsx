import InfoCard from '@/components/ui/InfoCard'
import MapEmbed from '@/components/ui/MapEmbed'
import { accommodations } from '@/data/travel'

const acc = accommodations[3] // id: 'airport-hotel'

export default function AirportHotelPage() {
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
      </InfoCard>

      {/* Accommodation info */}
      <InfoCard title="숙소 정보">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            공항 셔틀 운행 호텔 (공항 픽업/드롭 서비스)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            체크인: 8/6(목) — 디즈니에서 차로 직접 이동
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            체크아웃: 8/7(금) 새벽 (비행기 출발 전)
          </li>
        </ul>
      </InfoCard>

      {/* Next day schedule — highlighted */}
      <InfoCard highlight={true} title="⚠️ 다음날 일정">
        <ol className="space-y-3">
          {[
            '체크아웃 (새벽)',
            '렌터카 반납 → Turo 개인렌트 (8/7 아침)',
            '공항 체크인 (출발 3시간 전 권장)',
            'LA 10:40 출발 (OZ201)',
            '인천 8/8 (토) 15:20 도착',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs font-semibold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </InfoCard>

      {/* LAX info */}
      <InfoCard title="LAX 공항 이용 정보">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            국제선 출국: Tom Bradley International Terminal (TBIT)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            아시아나항공(OZ201): TBIT 이용
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            체크인 카운터: 출발 3시간 전부터 오픈
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            수하물 기탁: 출발 최소 1시간 30분 전까지
          </li>
        </ul>
      </InfoCard>

      {/* Map */}
      <InfoCard title="위치">
        <MapEmbed query={acc.mapQuery} height={300} />
      </InfoCard>
    </div>
  )
}
