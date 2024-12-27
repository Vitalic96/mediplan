import { BsPencilFill } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa'
import { HiVideoCamera } from 'react-icons/hi'
import { DialogProps } from '@radix-ui/react-dialog'

import { mockWeekCalendarList } from '@/lib/mocks'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const WeekCalendarDialog = ({
  activeTabIndex,
  changeTab,
  ...props
}: DialogProps & {
  activeTabIndex: number
  changeTab: (index: number) => void
}) => {
  return (
    <Dialog {...props}>
      <DialogContent className='flex flex-col md:max-w-[1080px]'>
        <DialogHeader className='justify-between gap-4 lg:flex-row lg:pr-20'>
          <DialogTitle>Calendar</DialogTitle>
          <DialogDescription className='hidden'></DialogDescription>
          <div className='flex shrink-0 grow gap-2 sm:gap-5 lg:justify-end'>
            {['Day', 'Week', 'Month'].map((label, i) => (
              <Button
                key={i}
                className='grow basis-[100px] sm:grow-0'
                variant={activeTabIndex === i ? 'primary' : 'gray'}
                size={'sm'}
                onClick={() => changeTab(i)}
              >
                {label}
              </Button>
            ))}
          </div>
        </DialogHeader>
        <div className='flex flex-col gap-6'>
          <div className='mx-auto flex w-full items-center gap-2 lg:hidden'>
            <Badge className='flex-1' variant='gray'>
              21 May 2021
            </Badge>
            <div className='h-0.5 w-3 shrink-0 rounded-full bg-gray-500'></div>
            <Badge className='flex-1' variant='gray'>
              27 May 2021
            </Badge>
          </div>
          {/* TODO: CHANGE SHADOW TO BORDER */}
          {/* TODO: CHANGE ADAPTIVE */}
          <div className='custom-scroll -mr-4 flex flex-col gap-y-4 overflow-auto pb-2 pr-4 text-[8px] lg:flex-row lg:text-[6px]'>
            <div className='hidden shrink-0 gap-x-2 lg:flex lg:basis-[30px] lg:flex-col'>
              <div className='flex w-[30px] shrink-0 flex-col px-[5px] pb-1 pt-[1px] lg:h-[47px]'></div>
              {Array(11)
                .fill(null)
                .map((_, i) => {
                  const time = i + 7
                  const TIME_AP_PM = time > 12 ? time - 12 : time
                  const AP_PM = time > 12 ? 'PM' : ' AM'
                  return (
                    <div
                      key={i}
                      className='flex w-[200px] shrink-0 flex-col px-[5px] pb-1 pt-[1px] text-[8px] lg:h-[47px] lg:w-[35px]'
                    >
                      {TIME_AP_PM} {AP_PM}
                    </div>
                  )
                })}
            </div>
            {mockWeekCalendarList.map(({ dayWeek, dayMonth, time }, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-1 flex-row gap-x-2 lg:flex-col'
                >
                  <div className='flex h-[47px] w-[30px] shrink-0 flex-col justify-center px-[5px] pb-1 pt-[1px] text-center text-[#817474] lg:w-auto lg:text-left lg:shadow-[inset_-0.659727px_-0.659727px_0px_#E0E0E0]'>
                    <div>{dayWeek}</div>
                    <div className='lg:text-sm'>{dayMonth}</div>
                  </div>
                  {time.map((el, i) => {
                    const time = i + 7
                    const TIME_AP_PM = time > 12 ? time - 12 : time
                    const AP_PM = time > 12 ? 'PM' : ' AM'

                    return (
                      <div
                        key={i}
                        className='flex min-h-[47px] w-[200px] shrink-0 flex-col lg:h-[47px] lg:w-auto lg:pb-1 lg:shadow-[inset_-0.659727px_-0.659727px_0px_#E0E0E0]'
                      >
                        {el ? (
                          <div className='h-full gap-1 overflow-hidden rounded border-l-[3px] border-violet bg-gray-50 px-[15px] py-[10px] lg:p-1'>
                            <div className='relative flex gap-1 text-[8px]'>
                              <div className='flex gap-0.5 font-medium uppercase'>
                                <div>{TIME_AP_PM}:00</div>
                                <div>{AP_PM}</div>
                              </div>
                              <div className='absolute right-0 top-0 flex grow items-center justify-end gap-2 lg:relative lg:gap-1'>
                                <Button
                                  className='p-0 lg:mr-auto lg:h-[10px] lg:w-[10px]'
                                  size='xsIcon'
                                  disabled
                                >
                                  <HiVideoCamera size={'66%'} />
                                </Button>
                                <Button
                                  className='p-0 lg:h-[10px] lg:w-[10px]'
                                  size='xsIcon'
                                  disabled
                                >
                                  <FaPhone size={'60%'} />
                                </Button>
                                <Button
                                  className='p-0 lg:h-[10px] lg:w-[10px]'
                                  size='xsIcon'
                                >
                                  <BsPencilFill size={'60%'} />
                                </Button>
                              </div>
                            </div>
                            <div className='text-[8px] font-medium'>
                              Bonnie Riley
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              )
            })}
            <div className='hidden shrink-0 gap-x-2 lg:flex lg:basis-[30px] lg:flex-col'>
              <div className='flex w-[30px] shrink-0 flex-col px-[5px] pb-1 pt-[1px] lg:h-[47px]'></div>
              {Array(11)
                .fill(null)
                .map((_, i) => {
                  const time = i + 7
                  const TIME_AP_PM = time > 12 ? time - 12 : time
                  const AP_PM = time > 12 ? 'PM' : ' AM'
                  return (
                    <div
                      key={i}
                      className='flex w-[200px] shrink-0 flex-col px-[5px] pb-1 pt-[1px] text-[8px] lg:h-[47px] lg:w-[35px]'
                    >
                      {TIME_AP_PM} {AP_PM}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
