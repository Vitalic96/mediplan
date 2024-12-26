'use client'

import { useMemo, useState } from 'react'
import {
  MonthChangeEventHandler,
  SelectSingleEventHandler,
} from 'react-day-picker'

import { getDateFormat } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Badge } from '@/components/ui/badge'
import { CreateMeetingDialog } from '@/components/dialogs/create-meeting-dialog'

const MonthTab = () => {
  const [isCreatePopupOpen, setIsCreateMeetingPopupOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date(2021, 4, 21))
  const [month, setMonth] = useState(date)
  const [firstDay, lastDay] = useMemo(() => {
    if (month == undefined) {
      return [getDateFormat(new Date()), getDateFormat(new Date())]
    }
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1)
    const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0)

    return [getDateFormat(firstDay), getDateFormat(lastDay)]
  }, [month])

  const handleDateSelect: SelectSingleEventHandler = (date) => {
    setDate(date)
    setIsCreateMeetingPopupOpen(true)
  }

  const handleMonthChange: MonthChangeEventHandler = (date) => {
    setMonth(date)
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='mx-auto flex w-full items-center gap-2'>
        <Badge className='flex-1' variant='gray'>
          {firstDay}
        </Badge>
        <div className='h-0.5 w-3 shrink-0 rounded-full bg-gray-500'></div>
        <Badge className='flex-1' variant='gray'>
          {lastDay}
        </Badge>
      </div>
      <Calendar
        mode='single'
        defaultMonth={date}
        selected={date}
        onMonthChange={handleMonthChange}
        onSelect={handleDateSelect}
        className='rounded-md border'
      />
      <CreateMeetingDialog
        open={isCreatePopupOpen}
        onOpenChange={setIsCreateMeetingPopupOpen}
      />
    </div>
  )
}

export { MonthTab }
