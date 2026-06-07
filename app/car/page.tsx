import InfoCard from '@/components/ui/InfoCard'
import MapEmbed from '@/components/ui/MapEmbed'
import { carRental } from '@/data/travel'

export default function CarPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          🚗 Tesla Model Y
        </h1>
        <p className="text-neutral-500 text-sm md:text-base">
          {carRental.company} · 렌터카
        </p>
      </div>

      {/* Vehicle info card */}
      <InfoCard highlight={true}>
        <div className="space-y-4">
          <div>
            <div className="text-lg font-semibold text-neutral-900">Tesla Model Y 2026</div>
            <div className="text-sm text-neutral-500 mt-0.5">FSD (Full Self-Driving) 탑재</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm">
              <span className="text-neutral-400 text-xs block mb-0.5">픽업</span>
              <span className="font-medium text-neutral-900">{carRental.pickupDate}</span>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm">
              <span className="text-neutral-400 text-xs block mb-0.5">반납</span>
              <span className="font-medium text-neutral-900">{carRental.returnDate}</span>
            </div>
          </div>
        </div>
      </InfoCard>

      {/* Pickup instructions */}
      <InfoCard title="픽업 방법">
        <ol className="space-y-3">
          {carRental.pickupInstructions.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs font-semibold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </InfoCard>

      {/* Return info */}
      <InfoCard title="반납">
        <div className="space-y-1 text-sm text-neutral-700">
          <div className="font-medium text-neutral-900">{carRental.returnDate} 아침, 공항 가는 길에 반납</div>
          <div>LAX Budget Parking으로 차 가져가서 반납 후 체크인</div>
        </div>
      </InfoCard>

      {/* Map */}
      <InfoCard title="LAX Budget Parking 위치">
        <MapEmbed query={carRental.pickupMapQuery} height={300} />
      </InfoCard>

      {/* Notes */}
      <InfoCard title="참고사항">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            FSD는 고속도로에서 자동 차선 변경, 자동 주행 가능
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            시내 운전 시에는 일반 모드 권장
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            충전은 Tesla Supercharger 이용 (앱에서 위치 확인)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            주차 시 배터리 잔량 20% 이상 유지 권장
          </li>
        </ul>
      </InfoCard>
    </div>
  )
}
