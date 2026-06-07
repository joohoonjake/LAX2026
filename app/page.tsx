import InfoCard from '@/components/ui/InfoCard'
import { flights, carRental, accommodations, dailySchedule, keyNotes, movingDays } from '@/data/travel'

function sleepingColor(sleeping: string): string {
  if (sleeping.includes('조슈아')) return 'bg-amber-50 text-amber-800'
  if (sleeping.includes('샌디에고')) return 'bg-blue-50 text-blue-800'
  if (sleeping.includes('디즈니')) return 'bg-purple-50 text-purple-800'
  return 'bg-neutral-100 text-neutral-600'
}

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
        <div className="space-y-2">
          {dailySchedule.map((day) => (
            <div
              key={day.date}
              className={`rounded-xl border p-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 ${
                day.isMovingDay
                  ? 'border-l-4 border-[#0F6E56] bg-[#0F6E56]/5 border-r border-t border-b border-neutral-200'
                  : 'border-neutral-200 bg-white'
              }`}
            >
              {/* Date column */}
              <div className="flex-shrink-0 w-full sm:w-28">
                <span className="font-semibold text-sm text-neutral-900">{day.date}</span>
                <span className="text-xs text-neutral-500 ml-1">{day.dayLabel}</span>
              </div>

              {/* Sleeping badge */}
              <div className="flex-shrink-0 sm:w-32">
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${sleepingColor(day.sleeping)}`}
                >
                  {day.sleeping}
                </span>
              </div>

              {/* Memo */}
              {day.memo && (
                <div className="text-sm text-neutral-600 flex-1 leading-relaxed">
                  {day.memo}
                </div>
              )}
            </div>
          ))}
        </div>
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

      {/* Key notes */}
      <section>
        <h2 className="text-lg font-semibold text-neutral-900 mb-4 tracking-tight">
          기억할 것 딱 3가지
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {keyNotes.map((note) => (
            <InfoCard key={note.title}>
              <div className="text-2xl mb-2">{note.emoji}</div>
              <div className="font-semibold text-neutral-900 text-sm mb-1">{note.title}</div>
              <div className="text-xs text-neutral-500 leading-relaxed">{note.desc}</div>
            </InfoCard>
          ))}
        </div>
      </section>
    </div>
  )
}
