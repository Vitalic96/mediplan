import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='container flex min-h-screen gap-5'>
      <Sidebar />
      <main className='grow'>
        <Header />
        <div className='-mt-8'>{children}</div>
      </main>
    </div>
  )
}

export default DashboardLayout
