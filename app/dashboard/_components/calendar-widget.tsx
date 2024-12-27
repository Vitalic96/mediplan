'use client'

import { forwardRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { WeekCalendarDialog } from '@/components/dialogs/week-calendar-dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DayTab } from './day-tab'
import { MonthTab } from './month-tab'

const CalendarWidget = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const [activeIndexTab, setActiveIndexTab] = useState(0)

  return (
    <Card ref={ref} {...props}>
      <CardHeader className='min-h-[90px] shrink-0 gap-x-6 gap-y-3 xl:flex-row xl:items-center xl:justify-between'>
        <CardTitle asChild>
          <h3>Calendar</h3>
        </CardTitle>
        <div className='flex shrink-0 grow gap-2 sm:gap-5 xl:justify-end xl:self-center'>
          {['Day', 'Week', 'Month'].map((label, i) => (
            <Button
              key={i}
              className='grow basis-[100px] sm:grow-0'
              variant={activeIndexTab === i ? 'primary' : 'gray'}
              size={'sm'}
              onClick={() => setActiveIndexTab(i)}
            >
              {label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className='custom-scroll flex grow flex-col gap-3 overflow-x-hidden'>
        {activeIndexTab === 0 && <DayTab />}
        {activeIndexTab === 2 && <MonthTab />}
      </CardContent>
      <WeekCalendarDialog
        open={activeIndexTab === 1}
        activeTabIndex={activeIndexTab}
        changeTab={setActiveIndexTab}
        onOpenChange={(open) => open === false && setActiveIndexTab(0)}
      />
    </Card>
  )
})

export { CalendarWidget }
