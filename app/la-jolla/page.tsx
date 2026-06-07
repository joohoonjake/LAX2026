import InfoCard from '@/components/ui/InfoCard'
import MapEmbed from '@/components/ui/MapEmbed'
import { accommodations } from '@/data/travel'

const acc = accommodations[1] // id: 'la-jolla'

export default function LaJollaPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {acc.emoji} {acc.name}
          </h1>
          <span className="bg-[#0F6E56]/10 text-[#0F6E56] text-xs font-medium px-2 py-0.5 rounded-full">메인</span>
        </div>
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
      <InfoCard highlight={true}>
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

      {/* Airbnb details */}
      <InfoCard highlight={true} title="Airbnb 숙소">
        <div className="space-y-3">
          <div className="text-sm text-neutral-700">
            주소: 919 Tourmaline St, San Diego, CA 92109
          </div>
          <div className="text-sm font-medium text-[#0F6E56]">
            &ldquo;여기가 메인. 느긋하게 쉬는 곳.&rdquo;
          </div>
          <div className="text-sm text-neutral-500">
            8박 일정: 7/26(일) ~ 8/3(월)
          </div>
          {acc.bookingUrl && (
            <div className="pt-1">
              <a
                href={acc.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-700 transition-colors"
              >
                Airbnb 예약 확인
              </a>
            </div>
          )}
        </div>
      </InfoCard>

      {/* La Jolla intro */}
      <InfoCard title="라호야 (La Jolla) 소개">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            샌디에고 북쪽 해안 마을, 절벽과 바다 전망으로 유명
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            인근 명소: La Jolla Cove (물개 서식지), 토레이 파인스 해변, 버드록 해변
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            919 Tourmaline St는 Pacific Beach 지역 — 해변 바로 근처
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            슈퍼마켓: Vons, Ralph&apos;s 인근 위치
          </li>
        </ul>
      </InfoCard>

      {/* 8-day schedule */}
      <InfoCard title="8일 일정 (7/26 ~ 8/2)">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            특별 계획 없이 느긋하게 지내는 것이 목표
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            해변 산책, 인근 카페/레스토랑 탐방
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            샌디에고 동물원, 시월드 등 당일치기 가능
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            아기와 함께 편하게 쉬는 베이스 캠프
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
