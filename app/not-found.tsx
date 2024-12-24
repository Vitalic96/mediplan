import Link from 'next/link'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <section className='flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center py-10'>
        <div className='container flex flex-col items-center justify-center gap-8'>
          <h1 className='text-5xl'>Not found page</h1>
          <Button asChild>
            <Link href='/dashboard'>Go to dashboard</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
