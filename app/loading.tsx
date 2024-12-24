import { Header } from '@/components/header'

const LoadingPage = () => {
  return (
    <>
      <Header />
      <section className='flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center py-10'>
        <div className='container flex flex-col items-center justify-center gap-8'>
          <h1 className='text-5xl'>loading</h1>
        </div>
      </section>
    </>
  )
}

export default LoadingPage
