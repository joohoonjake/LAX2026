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
      </InfoCard>

      {/* Hotel info */}
      <InfoCard title="호텔 정보">
        <div className="space-y-2 text-sm text-neutral-700">
          <div>
            <span className="text-neutral-400 text-xs block mb-0.5">이름</span>
            <span className="font-medium text-neutral-900">Howard Johnson by Wyndham Anaheim</span>
          </div>
          <div>
            <span className="text-neutral-400 text-xs block mb-0.5">주소</span>
            <span>1380 S Harbor Blvd, Anaheim, CA 92802</span>
          </div>
          <div className="mt-3 text-[#0F6E56] font-medium">
            🚶 디즈니랜드까지 도보 8분
          </div>
        </div>
      </InfoCard>

      {/* Disneyland tips */}
      <InfoCard title="디즈니랜드 관람 팁">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            체크인 8/3(월), 8/4(화)·8/5(수) 이틀 디즈니 방문
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            낮에 더우면 호텔로 복귀해 아기 낮잠 재우기
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            저녁에 다시 입장 (멀티데이 티켓은 당일 재입장 가능)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            Howard Johnson 호텔에서 디즈니랜드 정문까지 도보 약 8분
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            호텔 셔틀 서비스 확인 권장
          </li>
        </ul>
      </InfoCard>

      {/* Surrounding info */}
      <InfoCard title="주변 정보">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            Downtown Disney: 호텔에서 도보 5분 (쇼핑/레스토랑, 무료입장)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            California Adventure: 디즈니랜드 바로 옆
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            주차: 호텔 주차 이용 권장 (디즈니 주차는 비쌈)
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
