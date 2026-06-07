import InfoCard from '@/components/ui/InfoCard'
import MapEmbed from '@/components/ui/MapEmbed'
import { accommodations } from '@/data/travel'

const acc = accommodations[0] // id: 'joshua-tree'

export default function JoshuaTreePage() {
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
            위치: 트웬티나인 팜스 인근 (Joshua Tree National Park 근처)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            2박 일정: 7/24(금) 도착 당일 체크인, 7/26(일) 오전 체크아웃 후 샌디에고로 이동
          </li>
        </ul>
      </InfoCard>

      {/* National Park info */}
      <InfoCard title="조슈아 트리 국립공원">
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            미국 캘리포니아 남부의 국립공원
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            거대한 조슈아 트리와 바위 지형으로 유명
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            일출/일몰 시간대 방문 추천
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            밤하늘 별 관측 명소 (다크스카이 파크 지정)
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
