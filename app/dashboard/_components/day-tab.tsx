'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BsPencilFill } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa'

import { mockdayCalendarList } from '@/lib/mocks'
import { getDateFormat } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { EditMeetingDialog } from '@/components/dialogs/edit-meeting-dialog'
import { CreateMeetingDialog } from '@/components/dialogs/create-meeting-dialog'

const DayTab = () => {
  const [isEditPopupOpen, setIsEditMeetingPopupOpen] = useState(false)
  const [isCreatePopupOpen, setIsCreateMeetingPopupOpen] = useState(false)
  const [date, setDate] = useState<Date>(new Date(2021, 4, 21))

  const handlePrevDate = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)))
  }

  const handleNextDate = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)))
  }

  const handleEdit = () => {
    setIsEditMeetingPopupOpen(true)
  }

  const handleCreate = () => {
    setIsCreateMeetingPopupOpen(true)
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
          {mockdayCalendarList.map(({ name, time }, i) => (
            <li
              key={i}
              className='grid grid-flow-col grid-rows-2 items-center justify-between gap-x-5 rounded-md bg-[#F6F6F6] px-4 py-2 xl:flex xl:bg-transparent xl:p-0'
            >
              <h5 className='col-span-8 row-span-1 mr-auto font-semibold text-gray-800'>
                {name}
              </h5>
              <div className='col-span-8 row-span-1 flex items-center gap-4'>
                <div className='text-[#817474]'>at</div>
                <div className='text-gray-700'>{time}</div>
              </div>
              <div className='col-span-4 row-span-2 flex items-center justify-end gap-4'>
                <Button size='xsIcon' disabled>
                  <FaPhone size={12} />
                </Button>
                <Button size='xsIcon' onClick={handleEdit}>
                  <BsPencilFill size={12} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Button
          variant='link'
          className='text-normal h-auto text-base text-violet'
          onClick={handleCreate}
        >
          Add +
        </Button>
      </div>
      <EditMeetingDialog
        open={isEditPopupOpen}
        onOpenChange={setIsEditMeetingPopupOpen}
      />
      <CreateMeetingDialog
        open={isCreatePopupOpen}
        onOpenChange={setIsCreateMeetingPopupOpen}
      />
    </>
  )
}

export { DayTab }
