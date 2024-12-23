import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockListActivity } from '@/lib/mocks'

const DashboardPage = () => {
  return (
    <div className='grid grid-cols-12 gap-5'>
      <Card className='col-span-6 max-h-[415px] overflow-hidden'>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card className='col-span-6 max-h-[415px] overflow-hidden'>
        <CardHeader>
          <CardTitle>Pacient Wall Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='flex flex-col gap-5'>
            {mockListActivity.map(({ image, name, info, date }, i) => (
              <li key={i} className='flex items-center gap-6'>
                <Image
                  className='shrink-0 self-start'
                  src={image}
                  width={52}
                  height={52}
                  alt=''
                />
                <div className='w-[150px] shrink-0'> {name}</div>
                <div className='text-violet grow text-sm'> {info}</div>
                <div className='text-sm text-gray-950 opacity-20'>{date}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className='col-span-6 max-h-[415px] overflow-hidden'>
        <CardHeader>
          <CardTitle>Search member</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card className='col-span-6 max-h-[415px] overflow-hidden'>
        <CardHeader>
          <CardTitle>Person Community</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}

export default DashboardPage
