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
          <li className="flex items-start gap-2">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">•</span>
            <a
              href="https://www.airbnb.co.kr/rooms/44433478?guests=1&adults=1&s=67&unique_share_id=382566c6-d4ca-4ca7-9cf0-d236d92d472a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F6E56] underline underline-offset-2 hover:text-[#0a5240]"
            >
              Airbnb 예약 페이지 →
            </a>
          </li>
        </ul>
      </InfoCard>

      {/* Directions */}
      <InfoCard title="🗺️ 록 리치(Rock Reach) 별장 가는 길">
        <p className="text-xs text-neutral-500 mb-4">
          집은 비포장도로에 있지만 사륜구동 차량은 필요 없습니다.
        </p>

        {/* Steps */}
        <ol className="space-y-3 text-sm text-neutral-700">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">1</span>
            <span>
              I-10 고속도로에서 <strong>Highway 62 (Twentynine Palms Highway)</strong> 출구로 나와 동쪽(Twentynine Palms 방향)으로 진행
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">2</span>
            <span>
              20마일 후 <strong>좌회전(북쪽)</strong> → Highway 247 (Old Woman Springs Road)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">3</span>
            <span>
              언덕을 따라 1.8마일 올라가다가, 언덕 정상 직전에 <strong>El Cortez Road 좌회전</strong> 표지 확인 → 좌회전
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">4</span>
            <span>
              Cortez가 <strong>Buena Suerte Lane</strong>과 만나면 → 우회전
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">5</span>
            <span>
              Buena Suerte가 <strong>Cobalt Road(비포장도로)</strong>와 만나면 → 좌회전
            </span>
          </li>
        </ol>

        {/* Cobalt road note */}
        <div className="mt-3 ml-8 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
          Cobalt 초입은 거칠고 약간 가파르지만 2륜구동 차도 충분히 통과 가능. 천천히 주행하세요.
        </div>

        <ol className="space-y-3 text-sm text-neutral-700 mt-3" start={6}>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">6</span>
            <span>
              Cobalt를 서쪽으로 1.2마일 진행 → <strong>Acoma Trail에서 끝남</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">7</span>
            <span>
              교차로 정면에 Rock Reach 사설 커뮤니티로 들어가는 비포장 진입로(<strong>Acoma Terrace Trail</strong>) 시작 (큰 바위에 이름 표시)
            </span>
          </li>
        </ol>

        {/* No trespassing note */}
        <div className="mt-3 ml-8 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-800">
          "No Trespassing(출입금지)" 표지는 무시하세요
        </div>

        <ol className="space-y-3 text-sm text-neutral-700 mt-3" start={8}>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">8</span>
            <span>
              이 도로는 왼쪽(남쪽)으로 휘어진 뒤 오르막을 오름 → <strong>Acoma Terrace Trail</strong> 도로 표지판 보임
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F6E56] text-white text-xs flex items-center justify-center font-semibold mt-0.5">9</span>
            <span>
              비포장도로를 약 1/8마일 더 가면 <strong>오른쪽에 집, 검은 대문, 주소 표지판</strong>이 보임
            </span>
          </li>
        </ol>

        {/* Gate code */}
        <div className="mt-4 p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5">
          <div className="text-xs font-semibold text-neutral-600 mb-2">게이트 코드</div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-neutral-500">출입 (입력)</span>
            <span className="font-mono font-bold text-[#0F6E56] text-base tracking-widest">1989</span>
          </div>
          <div className="text-xs text-neutral-500">
            나갈 때는 자동으로 열림. 안 열리면 <span className="font-mono font-semibold text-neutral-700">4362</span> 입력
          </div>
        </div>

        {/* Warning */}
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 space-y-1.5">
          <div className="font-semibold">⚠️ Rock Reach 내 주행 주의사항</div>
          <ul className="space-y-1 mt-1">
            <li>• 방금 온 경로(Cobalt Road → 집)로만 운전 가능. 그 이상 안쪽으로는 차량 진입 금지 (도보는 가능)</li>
            <li>• 반드시 천천히 운전하세요. 좁은 길을 다른 차량, 보행자, 개, 말과 함께 공유합니다.</li>
          </ul>
        </div>
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
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm text-neutral-700">
            <span>📍</span>
            <span className="font-medium">{acc.address}</span>
          </div>
          <a
            href={`https://maps.google.com/maps?q=${encodeURIComponent(acc.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium text-[#0F6E56] border border-[#0F6E56] rounded-full px-3 py-1 hover:bg-[#0F6E56] hover:text-white transition-colors"
          >
            구글맵에서 보기 ↗
          </a>
        </div>
        <MapEmbed query={acc.mapQuery} height={300} />
      </InfoCard>
    </div>
  )
}
