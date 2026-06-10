import InfoCard from '@/components/ui/InfoCard'
import MapEmbed from '@/components/ui/MapEmbed'

export default function DisneylandPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          🎢 디즈니랜드
        </h1>
        <p className="text-sm text-neutral-500">Disneyland Resort · Anaheim, CA</p>
      </div>

      {/* Visit info card */}
      <InfoCard highlight={true}>
        <div className="space-y-3">
          <div className="text-xs text-neutral-400 mb-1">방문 날짜</div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#0F6E56] w-16">8/4 (화)</span>
              <span className="text-sm text-neutral-700">Disneyland Park</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#0F6E56] w-16">8/5 (수)</span>
              <span className="text-sm text-neutral-700">Disney California Adventure Park</span>
            </div>
          </div>
          <div className="text-sm text-neutral-500 pt-1">Howard Johnson 호텔에서 도보 8분</div>
        </div>
      </InfoCard>

      {/* Ticket info card */}
      <InfoCard title="보유 티켓">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-lg">🎫</span>
            <div className="space-y-1">
              <div className="text-sm font-semibold text-neutral-800">2-Day Ticket with Lightning Multi Pass</div>
              <div className="text-sm text-neutral-600">어른 2명</div>
              <div className="text-sm text-neutral-500">딸 (2세 미만) — 무료 입장</div>
            </div>
          </div>
        </div>
      </InfoCard>

      {/* Tips card */}
      <InfoCard title="방문 팁">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            오픈 시간에 맞춰 일찍 입장 (인기 어트랙션 줄 짧음)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            낮 12시~4시 가장 더움 — 이 시간에 호텔 복귀해 아기 낮잠
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            저녁에 다시 입장 (멀티데이 티켓 당일 재입장 가능)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            Lightning Multi Pass 앱으로 Lightning Lane 예약 권장
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            유모차 대여 가능 (입구 근처)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            아기용 베이비 케어 센터: Main Street U.S.A. 위치
          </li>
        </ul>
      </InfoCard>

      {/* Map card */}
      <InfoCard title="위치">
        <MapEmbed
          query="Disneyland Resort, 1313 S Harbor Blvd, Anaheim, CA"
          height={280}
        />
        <div className="mt-3">
          <a
            href="https://disneyland.disney.go.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-700 transition-colors"
          >
            디즈니랜드 공식 사이트
          </a>
        </div>
      </InfoCard>
    </div>
  )
}
