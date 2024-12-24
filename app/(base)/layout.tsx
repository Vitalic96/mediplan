import { Header } from '@/components/header'

const BaseLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BaseLayout
