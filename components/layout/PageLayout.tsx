import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <MobileHeader />
      <main className="md:ml-[260px] min-h-screen bg-neutral-50">
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </>
  )
}
