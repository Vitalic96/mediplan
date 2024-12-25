'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Pencil, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getDateFormat } from '@/lib/utils'

const DayTab = () => {
  const [date, setDate] = useState<Date>(new Date(2021, 4, 21))

  const handlePrevDate = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)))
  }

  const handleNextDate = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)))
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <Button
          variant='ghost'
          className='h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100'
          onClick={handlePrevDate}
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>
        <div>{getDateFormat(date)}</div>
        <Button
          variant='ghost'
          className='h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100'
          onClick={handleNextDate}
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>
      <div className='flex flex-col items-start gap-2'>
        <ul className='flex w-full flex-col gap-2.5 border-b border-gray-100 pb-4'>
          {[
            {
              name: 'Bonnie Riley',
              time: '5pm-6pm',
            },
            {
              name: 'Aliah Pitts',
              time: '5pm-6pm',
            },
            {
              name: 'Robin Papa',
              time: '5pm-6pm',
            },
            {
              name: 'Irma Rogers',
              time: '6pm-7pm',
            },
            {
              name: 'Bonnie Riley',
              time: '5pm-6pm',
            },
            {
              name: 'Aliah Pitts',
              time: '5pm-6pm',
            },
          ].map(({ name, time }, i) => (
            <li key={i} className='flex items-center justify-between gap-5'>
              <h5 className='mr-auto font-semibold text-gray-800'>{name}</h5>
              <div className='text-[#817474]'>at</div>
              <div className='text-gray-700'>{time}</div>
              <Button size='icon' disabled>
                <Phone size={14} />
              </Button>
              <Button size='icon'>
                <Pencil size={14} />
              </Button>
            </li>
          ))}
        </ul>
        <Button variant='link' className='text-normal h-auto text-violet'>
          Add +
        </Button>
      </div>
    </>
  )
}

export { DayTab }
