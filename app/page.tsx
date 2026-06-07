import InfoCard from '@/components/ui/InfoCard'
import DailyScheduleWithDiary from '@/components/ui/DailyScheduleWithDiary'
import { flights, carRental, accommodations, dailySchedule, movingDays } from '@/data/travel'

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          우리 가족 미국 여행
        </h1>
        <p className="text-neutral-500 text-sm md:text-base">
          2026. 7. 24 ~ 8. 7 &middot; 14박 15일 &middot; 부부 + 아기
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <InfoCard>
          <div className="text-xs text-neutral-400 mb-1">✈️ 항공편</div>
          <div className="font-semibold text-neutral-900 text-sm md:text-base">
            {flights.outbound.flightNumber} / {flights.return.flightNumber}
          </div>
          <div className="text-xs text-neutral-500 mt-0.5">{flights.outbound.aircraft}</div>
          <div className="text-xs text-amber-600 font-medium mt-0.5">{flights.outbound.cabinClass}</div>
        </InfoCard>

        <InfoCard>
          <div className="text-xs text-neutral-400 mb-1">🚗 렌터카</div>
          <div className="font-semibold text-neutral-900 text-sm md:text-base leading-tight">
            Tesla Model Y FSD
          </div>
          <div className="text-xs text-neutral-500 mt-0.5">{carRental.company}</div>
        </InfoCard>

        <InfoCard>
          <div className="text-xs text-neutral-400 mb-1">🏠 숙소</div>
          <div className="font-semibold text-neutral-900 text-sm md:text-base">
            {accommodations.length}곳
          </div>
          <div className="text-xs text-neutral-500 mt-0.5">{accommodations.length}개 숙소</div>
        </InfoCard>
      </div>

      {/* Daily schedule */}
      <section>
        <h2 className="text-lg font-semibold text-neutral-900 mb-4 tracking-tight">
          날짜별 일정
        </h2>
        <DailyScheduleWithDiary schedule={dailySchedule} />
      </section>

      {/* Moving days */}
      <section>
        <h2 className="text-lg font-semibold text-neutral-900 mb-4 tracking-tight">
          짐 옮기는 날은 3번뿐
        </h2>
        <div className="space-y-3">
          {movingDays.map((m) => (
            <div
              key={m.date}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl border border-neutral-200 bg-white p-4"
            >
              <div className="flex-shrink-0 text-sm font-semibold text-neutral-500 w-14">
                {m.date}
              </div>
              <div className="flex items-center gap-2 flex-1 text-sm text-neutral-900 flex-wrap">
                <span className="font-medium">{m.from}</span>
                <span className="text-[#0F6E56] font-bold">→</span>
                <span className="font-medium">{m.to}</span>
                {m.note && (
                  <span className="text-xs text-neutral-400 ml-1">({m.note})</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
