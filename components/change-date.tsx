'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { getDateFormat } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const ChangeDate = ({ initDate }: { initDate: Date }) => {
  const [date, setDate] = useState<Date>(initDate)

  const handlePrevDate = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)))
  }

  const handleNextDate = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)))
  }

  return (
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
  )
}
