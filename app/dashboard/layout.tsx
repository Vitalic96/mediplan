import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='container flex min-h-screen flex-col gap-5 lg:flex-row'>
      <Sidebar className='hidden lg:flex' />
      <main className='grow'>
        <Header />
        <div className='-mt-8'>{children}</div>
      </main>
    </div>
  )
}

export default DashboardLayout
