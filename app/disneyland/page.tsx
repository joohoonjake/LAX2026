import InfoCard from '@/components/ui/InfoCard'
import MapEmbed from '@/components/ui/MapEmbed'
import Checklist from '@/components/ui/Checklist'

const disneylandItems = [
  { id: 'ticket', label: '디즈니랜드 티켓 (앱에서 확인)' },
  { id: 'sunscreen', label: '선크림 (야외 장시간 체류)' },
  { id: 'hat', label: '모자 (아기 포함)' },
  { id: 'stroller', label: '유모차 or 아기띠' },
  { id: 'snacks', label: '아기 간식 및 물' },
  { id: 'powerbank', label: '보조배터리 (앱 많이 씀)' },
  { id: 'clothes', label: '여벌 옷 (아기용)' },
  { id: 'medicine', label: '상비약 (해열제 등)' },
]

const packingItems = [
  { id: 'passport', label: '여권 (아기 포함)' },
  { id: 'visa', label: 'ESTA (아기 포함)' },
  { id: 'insurance', label: '여행자 보험 증서' },
  { id: 'creditcard', label: '해외 카드 (트래블로그 등)' },
  { id: 'charger', label: '충전기 및 멀티어댑터' },
  { id: 'baby-formula', label: '분유 / 이유식' },
  { id: 'diaper', label: '기저귀 (여유분 포함)' },
  { id: 'baby-med', label: '아기 상비약' },
  { id: 'airbnb-info', label: 'Airbnb 체크인 정보 확인' },
  { id: 'flight-checkin', label: '온라인 체크인 완료' },
]

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
        <div className="space-y-1">
          <div className="text-xs text-neutral-400 mb-1">방문 날짜</div>
          <div className="text-lg font-semibold text-[#0F6E56]">8/4 (화) · 8/5 (수) — 이틀</div>
          <div className="text-sm text-neutral-500">Howard Johnson 호텔에서 도보 8분</div>
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
            Genie+ 앱으로 Lightning Lane 예약 권장
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

      {/* Disneyland checklist */}
      <InfoCard title="디즈니랜드 준비물 체크리스트">
        <Checklist
          storageKey="checklist-disneyland"
          items={disneylandItems}
        />
      </InfoCard>

      {/* General packing checklist */}
      <InfoCard title="여행 전체 준비물">
        <Checklist
          storageKey="checklist-packing"
          items={packingItems}
        />
      </InfoCard>
    </div>
  )
}
