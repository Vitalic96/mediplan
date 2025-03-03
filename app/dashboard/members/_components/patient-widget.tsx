'use client'

import { forwardRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { patientTabList } from '@/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BasicInfoTab } from './tabs/basic-info-tab'
import { EVisitHistoryTab } from './tabs/e-visit-history-tab'
import { PatientActions } from './patient-actions'

interface PatientWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  user: UserCard | null
}

const PatientWidget = forwardRef<HTMLDivElement, PatientWidgetProps>(
  ({ className, user, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState<(typeof patientTabList)[number]>(
      patientTabList[0],
    )

    return (
      <Card ref={ref} className={cn('lg:max-h-[850px]', className)} {...props}>
        <CardHeader className='shrink-0 gap-y-8'>
          <CardTitle variant='lg'>
            {user ? 'A patient' : 'Select a patient'}
          </CardTitle>
        </CardHeader>
        {/* TODO: ADD FADE IN ANIMATION */}
        {user && (
          <CardContent className='custom-scroll flex animate-fadein flex-col gap-4 overflow-x-hidden lg:gap-10 lg:pt-5'>
            <PatientActions user={user} />
            <div className='flex grow flex-wrap xs:gap-2 lg:-mx-4 xl:-ml-3 xl:-mr-8 xl:gap-x-1 xl:gap-y-[10px] xl:pt-2'>
              {patientTabList.map((label, i) => {
                const isActive = activeTab === label

                return (
                  <Button
                    key={i}
                    className={cn(
                      'shrink-0 grow basis-[calc(50%-4px)] justify-start text-xs xs:text-base sm:grow-0 sm:basis-[calc(33%-4px)] lg:basis-[100px] lg:justify-center xl:basis-auto xl:px-4',
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
        )}
      </Card>
    )
  },
)

export { PatientWidget }
