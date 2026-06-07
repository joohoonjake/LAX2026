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
        <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2">
          <a
            href={`https://maps.google.com/maps?q=${encodeURIComponent(acc.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-neutral-700 hover:text-[#0F6E56] transition-colors"
          >
            <span className="flex-shrink-0 mt-0.5">📍</span>
            <span className="underline underline-offset-2">{acc.address}</span>
          </a>
          {acc.bookingUrl && (
            <a
              href={acc.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#FF5A5F] hover:text-[#e0484d] transition-colors"
            >
              <span className="flex-shrink-0">🏠</span>
              <span className="underline underline-offset-2">Airbnb 예약 확인 →</span>
            </a>
          )}
        </div>
      </InfoCard>

      {/* Map embed */}
      <InfoCard title="위치">
        <MapEmbed query={acc.mapQuery} height={260} />
      </InfoCard>

      {/* Villa guide */}
      <InfoCard title="별장 이용 안내">
        <div className="space-y-5">
          {/* WiFi */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>📶</span> 와이파이
            </div>
            <div className="pl-6 space-y-0.5 text-sm text-neutral-600">
              <div>네트워크: <span className="font-medium text-neutral-800">919 Divine</span></div>
              <div>비밀번호: <span className="font-medium text-neutral-800">Sandalwood</span></div>
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* TV */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>📺</span> TV
            </div>
            <div className="pl-6 text-sm text-neutral-600">
              Sony 스마트 리모컨으로 Netflix, HBO, DirecTV Go 등의 앱 이용
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Speaker */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🔊</span> 스피커
            </div>
            <div className="pl-6 text-sm text-neutral-600">
              주방에 Bose 블루투스 스피커가 있으며, 원하는 곳으로 옮겨서 사용 가능
              <div className="mt-1 flex items-start gap-1.5 text-amber-700 bg-amber-50 rounded-md px-2.5 py-1.5">
                <span className="flex-shrink-0">⚠️</span>
                <span>해 진 후에는 데크에서 큰 음악을 틀지 마세요. 이웃들이 싫어합니다.</span>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Hot water */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🚿</span> 온수
            </div>
            <div className="pl-6 text-sm text-neutral-600">
              탱크리스(즉시 가열) 방식 — 한낮이나 오전 8시 이전에는 따뜻해지기까지 1분 정도 기다려 주세요
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Fridge */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🧊</span> 냉장고
            </div>
            <div className="pl-6 text-sm text-neutral-600 space-y-0.5">
              <div>정수 및 제빙 기능 있음</div>
              <div>오른쪽 아래 칸: 냉장실 / 왼쪽 아래 칸: 냉동실</div>
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Beach gear */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🏖️</span> 해변 장비 <span className="text-xs font-normal text-neutral-400">(차고에 있음)</span>
            </div>
            <div className="pl-6 text-sm text-neutral-600">
              파라솔, 의자, 서핑보드, 부기보드 모두 자유롭게 사용하세요!
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* Bikes */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🚲</span> 자전거 &amp; 탈것
            </div>
            <div className="pl-6 text-sm text-neutral-600 space-y-0.5">
              <div>자전거, 스케이트보드, 전동 스쿠터 이용 가능</div>
              <div>스쿠터 전원: 바닥 왼쪽 면에서 켜세요</div>
              <div className="flex items-center gap-1 text-amber-700">
                <span>⚠️</span> 항상 헬멧을 착용하세요!
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-100" />

          {/* BBQ */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
              <span>🔥</span> 가스레인지 &amp; BBQ
            </div>
            <div className="pl-6 text-sm text-neutral-600 space-y-0.5">
              <div>둘 다 천연가스를 사용하며 효율이 좋습니다</div>
              <div>BBQ 사용법: 점화 전에 뒤쪽으로 손을 뻗어 노란색 핸들을 BBQ 쪽으로 돌린 후 불을 켜세요</div>
            </div>
          </div>
        </div>
      </InfoCard>

    </div>
  )
}
