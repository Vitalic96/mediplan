import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

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
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
