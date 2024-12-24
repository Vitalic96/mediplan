import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-8 p-8 pb-20'>
      <h1 className='text-5xl'>Home page</h1>
      <Link
        className='inline-flex h-10 items-center justify-center rounded-xl bg-violet-400 px-10 py-1 font-medium text-white transition-colors hover:bg-violet-500 active:bg-violet-600'
        href='/dashboard'
      >
        Go to dashboard
      </Link>
    </div>
  )
}
