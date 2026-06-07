import InfoCard from '@/components/ui/InfoCard'
import { flights } from '@/data/travel'

export default function FlightPage() {
  const outbound = flights.outbound
  const ret = flights.return

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          ✈️ 비행기표
        </h1>
        <p className="text-neutral-500 text-sm md:text-base">
          아시아나항공 · Asiana Airlines
        </p>
      </div>

      {/* Flight cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 가는 편 */}
        <InfoCard highlight={true}>
          <div className="space-y-4">
            {/* Badge */}
            <div>
              <span className="bg-[#0F6E56]/10 text-[#0F6E56] text-xs font-medium px-2 py-0.5 rounded-full">
                가는 편
              </span>
            </div>

            {/* Route */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-neutral-900">
                인천 (ICN)
              </span>
              <span className="text-[#0F6E56] text-xl font-bold">→</span>
              <span className="text-2xl font-semibold text-neutral-900">
                LA (LAX)
              </span>
            </div>

            {/* Date */}
            <div className="text-sm text-neutral-500 font-medium">
              {outbound.dateLabel}
            </div>

            {/* Times */}
            <div className="flex items-end gap-4">
              <div>
                <div className="text-xs text-neutral-400 mb-0.5">출발</div>
                <div className="text-3xl font-bold text-neutral-900 tracking-tight">
                  {outbound.departure}
                </div>
              </div>
              <div className="text-neutral-300 text-xl mb-1">—</div>
              <div>
                <div className="text-xs text-neutral-400 mb-0.5">도착</div>
                <div className="text-3xl font-bold text-neutral-900 tracking-tight">
                  {outbound.arrival}
                </div>
                <div className="text-xs text-[#0F6E56] font-medium mt-0.5">
                  {outbound.arrivalNote}
                </div>
              </div>
            </div>

            {/* Flight details */}
            <div className="text-sm text-neutral-500">
              {outbound.flightNumber} · {outbound.aircraft}
            </div>

            {/* Button */}
            <div className="pt-1">
              <a
                href="https://flyasiana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-700 transition-colors"
              >
                ✈️ 아시아나 앱
              </a>
            </div>
          </div>
        </InfoCard>

        {/* 오는 편 */}
        <InfoCard>
          <div className="space-y-4">
            {/* Badge */}
            <div>
              <span className="bg-neutral-100 text-neutral-600 text-xs font-medium px-2 py-0.5 rounded-full">
                오는 편
              </span>
            </div>

            {/* Route */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-neutral-900">
                LA (LAX)
              </span>
              <span className="text-[#0F6E56] text-xl font-bold">→</span>
              <span className="text-2xl font-semibold text-neutral-900">
                인천 (ICN)
              </span>
            </div>

            {/* Date */}
            <div className="text-sm text-neutral-500 font-medium">
              {ret.dateLabel}
            </div>

            {/* Times */}
            <div className="flex items-end gap-4">
              <div>
                <div className="text-xs text-neutral-400 mb-0.5">출발</div>
                <div className="text-3xl font-bold text-neutral-900 tracking-tight">
                  {ret.departure}
                </div>
              </div>
              <div className="text-neutral-300 text-xl mb-1">—</div>
              <div>
                <div className="text-xs text-neutral-400 mb-0.5">도착</div>
                <div className="text-3xl font-bold text-neutral-900 tracking-tight">
                  {ret.arrival}
                </div>
                <div className="text-xs text-[#0F6E56] font-medium mt-0.5">
                  {ret.arrivalNote}
                </div>
              </div>
            </div>

            {/* Flight details */}
            <div className="text-sm text-neutral-500">
              {ret.flightNumber} · {ret.aircraft}
            </div>

            {/* Button */}
            <div className="pt-1">
              <a
                href="https://flyasiana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-700 transition-colors"
              >
                ✈️ 아시아나 앱
              </a>
            </div>
          </div>
        </InfoCard>
      </div>

      {/* 체크인 유의사항 */}
      <InfoCard title="체크인 유의사항">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            출발 3시간 전까지 공항 도착 권장
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            국제선 수하물: 위탁 23kg × 2개 (이코노미 기준, 확인 필요)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            아기 동반 시 탑승구 먼저 확인
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            온라인 체크인: 출발 24시간 전부터 가능
          </li>
        </ul>
      </InfoCard>
    </div>
  )
}
