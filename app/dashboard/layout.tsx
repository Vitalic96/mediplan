import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='container flex min-h-screen gap-4'>
      <Sidebar />
      <main>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
