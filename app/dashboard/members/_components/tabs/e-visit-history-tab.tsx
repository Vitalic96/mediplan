'use client'

import { useState } from 'react'

import { mockEVisitHistory } from '@/lib/mocks'
import { Button } from '@/components/ui/button'
import { CreateNoteDialog } from '@/components/dialogs/create-note-dialog'
import WrittingIcon from '@/assets/icons/writing.svg'

const EVisitHistoryTab = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)

  return (
    <>
      <table className='flex w-full table-fixed border-separate border-spacing-y-[10px] flex-col text-[10px] lg:table lg:[&_td:first-child]:rounded-l-full lg:[&_td:last-child]:rounded-r-full [&_td]:bg-gray-50 lg:[&_tr_>*:first-child]:pl-4 lg:[&_tr_>*:last-child]:pr-4'>
        <thead>
          <tr className='hidden pl-4 text-left text-[#817474]/50 lg:table-row'>
            <th className='w-[120px] font-normal'>Sesion Notes</th>
            <th className='font-normal'>Doctor</th>
            <th className='font-normal'>Date</th>
            <th className='font-normal'>Begin</th>
            <th className='font-normal'>End</th>
            <th className='font-normal'>Period</th>
          </tr>
        </thead>
        <tbody className='flex flex-col gap-4 lg:table-row-group'>
          {mockEVisitHistory.map(({ doctor, date, begin, end, period }, i) => {
            return (
              <tr
                key={i}
                className='relative flex w-full grid-cols-2 flex-wrap gap-x-3 rounded-2xl border-transparent bg-gray-50 p-5 lg:table-row lg:h-[35px] lg:p-0'
              >
                <td className='absolute right-5 top-5 flex flex-col items-end gap-2 2xs:flex-row 2xs:items-center lg:relative lg:right-0 lg:top-0 lg:table-cell'>
                  <div className='text-[#817474]/50 2xs:block lg:hidden'>
                    Sesion Notes
                  </div>
                  <Button
                    onClick={handleOpen}
                    variant='ghost'
                    size='smIcon'
                    className='h-auto gap-0.5 px-0 py-0 text-[10px] text-violet hover:text-violet-500 active:text-violet-700'
                  >
                    +
                    <WrittingIcon />
                  </Button>
                </td>
                <td className='flex gap-2 lg:table-cell'>
                  <div className='min-w-[50px] text-[#817474]/50 lg:hidden'>
                    Doctor
                  </div>
                  {doctor}
                </td>
                <td className='flex w-full gap-2 lg:table-cell'>
                  <div className='min-w-[50px] text-[#817474]/50 lg:hidden'>
                    Date
                  </div>
                  {date}
                </td>
                <td className='flex w-full gap-2 2xs:w-auto lg:table-cell'>
                  <div className='min-w-[50px] text-[#817474]/50 lg:hidden'>
                    Begin
                  </div>
                  {begin}
                </td>
                <td className='flex gap-2 lg:table-cell'>
                  <div className='text-[#817474]/50 lg:hidden'>End</div>
                  {end}
                </td>
                <td className='flex gap-2 lg:table-cell'>
                  <div className='text-[#817474]/50 lg:hidden'>Per</div>
                  {period}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <CreateNoteDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}

export { EVisitHistoryTab }
