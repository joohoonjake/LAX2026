import InfoCard from '@/components/ui/InfoCard'
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

      {/* Pickup & Return guide */}
      <InfoCard title="픽업 & 반납 안내">
        <div className="space-y-4 text-sm text-neutral-700">
          <p>공항 위치에 따른 픽업/반납 안내입니다. 정확한 픽업 장소는 도착 직전에 알려드립니다.</p>

          <div>
            <div className="font-semibold text-neutral-900 mb-1">반납 시</div>
            <p>차량을 둔 정확한 주차 위치를 알려주세요. 차량을 조기 반납하는 경우 주차 요금은 고객 부담입니다.</p>
          </div>

          <div>
            <div className="font-semibold text-neutral-900 mb-2">LAX 공항의 경우</div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
                도착층(Arrivals)으로 나와서 분홍색 LAX 셔틀 구역으로 걸어간 뒤, <strong className="text-neutral-900">LAX Budget Parking 셔틀</strong>을 타세요.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
                목적지: <a href="https://maps.google.com/?q=5455+W+111th+St,+Los+Angeles,+CA" target="_blank" rel="noopener noreferrer" className="text-neutral-900 font-bold underline underline-offset-2">5455 W 111th St, Los Angeles, CA</a>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <div className="font-semibold text-amber-900 mb-1.5">주의사항</div>
            <ul className="space-y-1 text-amber-800">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">•</span>
                터미널에서 직접 픽업/반납 불가
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">•</span>
                LAX 공항 주차장 이용 불가
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">•</span>
                LAX Budget Parking 요금: 시간당 $5, 1일 최대 $20
              </li>
            </ul>
          </div>
        </div>
      </InfoCard>

      {/* Supercharger guide */}
      <InfoCard title="테슬라 슈퍼차저 이용 안내">
        <div className="space-y-4 text-sm text-neutral-700">
          <p>테슬라 슈퍼차저를 이용하면 충전 비용이 차량에 직접 청구됩니다. 여행 종료 후 충전 영수증을 앱에 이미지로 올려드리며, 모든 충전 비용이 포함된 최종 청구서를 보내드립니다.</p>

          <div>
            <div className="font-semibold text-neutral-900 mb-1">충전 한도</div>
            <p>충전기를 꽂으면 테슬라가 보통 충전 한도를 80%로 설정하는데, 이 수준까지는 금방 충전됩니다. 80% 이상은 충전 속도가 느려져 시간이 더 걸립니다. 필요하면 화면 상단의 배터리 아이콘을 누르고 차량 이미지 옆 슬라이더를 오른쪽으로 움직여 한도를 조정할 수 있습니다.</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <div className="font-semibold text-amber-900 mb-1">주의</div>
            <p className="text-amber-800">충전이 끝난 후 슈퍼차저에 차량을 오래 방치하지 마세요. 충전 완료 후에는 테슬라가 대기 요금(idle fee)을 부과할 수 있습니다.</p>
          </div>
        </div>
      </InfoCard>

      {/* Turo Host Q&A */}
      <InfoCard title="Turo 호스트 Q&A 정리">
        <div className="space-y-4">
          {[
            {
              q: '주차비 (LAX 근처 픽업)',
              a: '주차 요금은 $20 한도 내에서 호스트가 부담합니다.',
            },
            {
              q: '슈퍼차저 충전 요금',
              a: '호스트 계정으로 청구되며, 여행 종료 시 최종 청구서에 합산하여 정산합니다.',
            },
            {
              q: '테슬라 앱 접근 권한',
              a: '계정 ID 공유 시 여행 기간 동안 앱 접근 권한을 제공받을 수 있습니다.',
            },
            {
              q: '조기 반납',
              a: '일정이 변경되어 차량을 일찍 반납할 경우, 사전에 통지하면 추가 요금 없이 가능합니다.',
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <span className="flex-shrink-0 font-semibold text-[#0F6E56]">Q{i + 1}.</span>
              <div>
                <div className="font-medium text-neutral-900">{item.q}</div>
                <div className="text-neutral-600 mt-0.5">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </InfoCard>

      {/* Tesla guide */}
      <InfoCard title="테슬라 가이드">
        <div className="text-sm text-neutral-700">
          <a
            href="https://youtube.com/playlist?list=PLEox0nUMFPF7ZaNZvUa8h65wEBSGtUgmw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-900 font-medium underline underline-offset-2 hover:text-[#0F6E56]"
          >
            <span>▶</span>
            <span>YouTube 플레이리스트 보기</span>
          </a>
        </div>
      </InfoCard>

    </div>
  )
}
