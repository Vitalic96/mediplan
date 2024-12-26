'use client'

import { forwardRef, useState } from 'react'
import { Bell, Ellipsis, Trash2, UserRound } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { patientTabList } from '@/constants'
import { BasicInfoTab } from './tabs/basic-info-tab'
import { EVisitHistoryTab } from './tabs/e-visit-history-tab'
import TelegramIcon from '@/assets/icons/telegram.svg'

const PatientWidget = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [activeTab, setActiveTab] = useState<(typeof patientTabList)[number]>(
    patientTabList[0],
  )
  return (
    <Card ref={ref} className={cn('lg:max-h-[850px]', className)} {...props}>
      <CardHeader className='shrink-0 gap-y-8'>
        <CardTitle variant='lg'>A patient</CardTitle>
      </CardHeader>
      <CardContent className='custom-scroll flex flex-col gap-4 overflow-x-hidden lg:gap-10 lg:pt-5'>
        <div className='flex items-center gap-5'>
          <div className='flex aspect-square w-[100px] shrink-0 items-center justify-center rounded-full bg-gray-100 text-white xl:w-[150px]'>
            <UserRound size={'50%'} />
          </div>
          <div className='flex grow flex-col gap-2 xl:flex-row'>
            <div className='grow'>
              <div className='text-xl leading-[1.3] 2xs:text-2xl xl:max-w-[250px] xl:text-[28px]'>
                Lorem Ipsum
              </div>
              <Button
                variant='link'
                className='hidden text-base text-[#FF5454] xl:inline-flex'
              >
                <Trash2 />
                Delete Pacient
              </Button>
            </div>
            <ul className='flex shrink-0 gap-3 2xs:gap-5 xl:pt-1'>
              <li>
                <Button size='xsIcon' className='xl:w-6'>
                  <TelegramIcon className='w-[16px]' />
                </Button>
              </li>
              <li>
                <Button size='xsIcon' className='xl:w-6'>
                  <Ellipsis size={16} />
                </Button>
              </li>
              <li>
                <Button size='xsIcon' className='xl:w-6'>
                  <Bell fill='white' size={12} />
                </Button>
              </li>
              <li className='xl:hidden'>
                <Button
                  size='xsIcon'
                  variant='ghost'
                  className='bg-gray-600 text-white xl:w-6'
                >
                  <Trash2 size={14} />
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex grow flex-wrap xs:gap-2 lg:-mx-4 xl:-ml-3 xl:-mr-8 xl:gap-x-1 xl:gap-y-[10px] xl:pt-2'>
          {patientTabList.map((label, i) => {
            const isActive = activeTab === label

            return (
              <Button
                key={i}
                className={cn(
                  'shrink-0 grow basis-[calc(50%-4px)] justify-start text-xs xs:text-base sm:grow-0 sm:basis-[calc(33%-4px)] lg:basis-[100px] lg:justify-center xl:px-2',
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
        <div className='custom-scroll -mr-2 grow overflow-x-hidden pr-2 lg:-mb-7 lg:pb-7'>
          {activeTab === 'Basic Info' && <BasicInfoTab />}
          {activeTab === 'E-visit history' && <EVisitHistoryTab />}
        </div>
      </CardContent>
    </Card>
  )
})

export { PatientWidget }
