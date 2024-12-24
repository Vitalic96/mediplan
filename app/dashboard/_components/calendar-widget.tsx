'use client'

import { useMemo, useState } from 'react'

import { Calendar } from '@/components/ui/calendar'
import { SelectSingleEventHandler } from 'react-day-picker'
import { Badge } from '@/components/ui/badge'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getFormatDate = (date: Date) => {
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}

const CalendarWidget = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [firstDayDate, lastDayDate] = useMemo(() => {
    if (date == undefined) {
      return [new Date(), new Date()]
    }
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

    return [firstDay, lastDay]
  }, [date])

  const handleSelect: SelectSingleEventHandler = (date) => {
    setDate(date)
  }

  return (
    <div className='flex flex-col gap-8 pl-5'>
      <div className='flex items-center gap-2'>
        <Badge className='flex-1' variant='gray'>
          {getFormatDate(firstDayDate)}
        </Badge>
        <div className='h-0.5 w-3 shrink-0 rounded-full bg-gray-500'></div>
        <Badge className='flex-1' variant='gray'>
          {getFormatDate(lastDayDate)}
        </Badge>
      </div>
      <Calendar
        mode='single'
        selected={date}
        onSelect={handleSelect}
        className='rounded-md border'
      />
    </div>
  )
}

export { CalendarWidget }
