import InfoCard from '@/components/ui/InfoCard'

export default function EsimPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          📶 e-SIM
        </h1>
        <p className="text-neutral-500 text-sm md:text-base">
          미국 현지 데이터 연결 정보
        </p>
      </div>

      {/* Placeholder */}
      <section>
        <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-neutral-400 text-sm">
          e-SIM 정보를 여기에 추가해주세요
        </div>
      </section>
    </div>
  )
}
