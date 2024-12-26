'use client'

import { Button } from '@/components/ui/button'
import { mockEVisitHistory } from '@/lib/mocks'
import WrittingIcon from '@/assets/icons/writing.svg'

const EVisitHistoryTab = () => {
  return (
    <table className='w-full border-separate border-spacing-y-4 text-[10px] [&_td:first-child]:rounded-l-full [&_td:last-child]:rounded-r-full [&_td]:bg-gray-50 [&_tr_>*:first-child]:pl-4 [&_tr_>*:last-child]:pr-4'>
      <thead>
        <tr className='pl-4 text-left text-[#817474]/50'>
          <th className='font-normal'>Sesion Notes</th>
          <th className='font-normal'>Doctor</th>
          <th className='font-normal'>Date</th>
          <th className='font-normal'>Begin</th>
          <th className='font-normal'>End</th>
          <th className='font-normal'>Period</th>
        </tr>
      </thead>
      <tbody>
        {mockEVisitHistory.map(({ doctor, date, begin, end, period }, i) => {
          return (
            <tr key={i} className='h-[35px] border-t-4 border-transparent'>
              <td className=''>
                <Button
                  variant='ghost'
                  size='smIcon'
                  className='gap-0.5 text-[10px] text-violet hover:text-violet-500 active:text-violet-700'
                >
                  +
                  <WrittingIcon />
                </Button>
              </td>
              <td className=''>{doctor}</td>
              <td className=''>{date}</td>
              <td className=''>{begin}</td>
              <td className=''>{end}</td>
              <td className=''>{period}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { EVisitHistoryTab }
