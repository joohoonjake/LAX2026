import PackingList from '@/components/ui/PackingList'

export default function PackingPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          🎒 준비물
        </h1>
        <p className="text-neutral-500 text-sm md:text-base">
          챙길 것들을 노트처럼 적어두고, 챙기면 하나씩 체크해요.
        </p>
      </div>

      <PackingList />
    </div>
  )
}
