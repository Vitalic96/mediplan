'use client'

import { forwardRef, useState } from 'react'
import { Mail, Pencil, Phone, Trash2, UserRound } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { patientTabList } from '@/constants'
import { BasicInfoTab } from './tabs/basic-info-tab'
import { EVisitHistoryTab } from './tabs/e-visit-history-tab'

const PatientWidget = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [activeTab, setActiveTab] = useState<(typeof patientTabList)[number]>(
    patientTabList[patientTabList.length - 1],
  )
  return (
    <Card ref={ref} className={cn('max-h-[850px]', className)} {...props}>
      <CardHeader className='min-h-[90px] shrink-0 gap-y-8'>
        <CardTitle variant='lg'>A patient</CardTitle>
      </CardHeader>
      <CardContent className='custom-scroll flex flex-col gap-10 overflow-x-hidden lg:pt-5'>
        <div className='flex items-center gap-5'>
          <div className='flex aspect-square w-[150px] shrink-0 items-center justify-center rounded-full bg-gray-100 text-white'>
            <UserRound size={75} />
          </div>
          <div className='grow'>
            <div className='text-[28px] leading-[1.3]'>Lorem Ipsum</div>
            <Button variant='link' className='text-base text-[#FF5454]'>
              <Trash2 />
              Delete Pacient
            </Button>
          </div>
          <ul className='flex shrink-0 gap-5'>
            <li>
              <Button size='xsIcon'>
                <Phone size={14} />
              </Button>
            </li>
            <li>
              <Button size='xsIcon'>
                <Mail size={14} />
              </Button>
            </li>
            <li>
              <Button size='xsIcon'>
                <Pencil size={14} />
              </Button>
            </li>
          </ul>
        </div>
        <div className='-ml-3 -mr-8 flex grow flex-wrap gap-x-1 gap-y-[10px] pt-2'>
          {patientTabList.map((label, i) => {
            const isActive = activeTab === label

            return (
              <Button
                key={i}
                className={cn(
                  'grow basis-[100px] px-2 text-base sm:grow-0',
                  !isActive && 'text-[#817474]',
                )}
                variant={isActive ? 'primary' : 'ghost'}
                size={'md'}
                onClick={() => setActiveTab(label)}
              >
                {label}
              </Button>
            )
          })}
        </div>
        <div className='custom-scroll -mb-7 -mr-2 grow overflow-x-hidden pb-7 pr-2'>
          {activeTab === 'Basic Info' && <BasicInfoTab />}
          {activeTab === 'E-visit history' && <EVisitHistoryTab />}
        </div>
      </CardContent>
    </Card>
  )
})

export { PatientWidget }
