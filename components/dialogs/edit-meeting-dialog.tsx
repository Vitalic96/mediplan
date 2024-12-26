import Image from 'next/image'
import { ChangeEventHandler, useState } from 'react'
import { format } from 'date-fns'
import { DialogProps } from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image1_1 from '@/assets/images/dashboard/2-1.jpg'

const EditMeetingDialog = (props: DialogProps) => {
  const [message, setNote] = useState('')
  const [date, setDate] = useState<Date>()

  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    setNote(event.target.value)
  }

  const handleSave = () => {
    // save logic
  }

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit the meeting</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-8 py-4'>
          <div className='flex items-center justify-between border-b border-[#F6F9FB] pb-4'>
            <div className='flex items-center gap-5 text-gray-800'>
              <Image className='h-[52px] w-[52px]' src={Image1_1} alt='' />
              <h4>Howard Burns</h4>
            </div>
            <div className='text-[22px] text-violet'>22 May, 2021</div>
            <div className='flex gap-2 text-violet'>
              <span className='text-gray-800/20'>at</span> 11am-12am
            </div>
          </div>
          <div className='flex gap-x-12 gap-y-4'>
            <Popover>
              <div className='flex items-center gap-[10px] text-[12px]'>
                <div>Data</div>
                <PopoverTrigger asChild>
                  <Button
                    variant='gray'
                    size='md'
                    className={cn(
                      'w-[90px] rounded-[10px] text-left text-[12px]',
                    )}
                  >
                    {date ? (
                      format(date, 'MM.dd.yyyy')
                    ) : (
                      <span>12.03.2021</span>
                    )}
                  </Button>
                </PopoverTrigger>
              </div>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  className='p-3'
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <div className='flex items-center gap-[10px] text-[12px]'>
              <div>Time</div>
              <Select>
                <SelectTrigger className='h-10 w-[90px] rounded-[10px] bg-[#F6F6F6] text-[12px] focus:border-transparent'>
                  <SelectValue placeholder='00am' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='08am'>08am</SelectItem>
                  <SelectItem value='09am'>09am</SelectItem>
                  <SelectItem value='10am'>10am</SelectItem>
                  <SelectItem value='11am'>11am</SelectItem>
                  <SelectItem value='12am'>12am</SelectItem>
                  <SelectItem value='01pm'>01pm</SelectItem>
                  <SelectItem value='02pm'>02pm</SelectItem>
                  <SelectItem value='03pm'>03pm</SelectItem>
                  <SelectItem value='04pm'>04pm</SelectItem>
                  <SelectItem value='05pm'>05pm</SelectItem>
                  <SelectItem value='06pm'>06pm</SelectItem>
                </SelectContent>
              </Select>
              <div>-</div>
              <Select>
                <SelectTrigger className='h-10 w-[90px] rounded-[10px] bg-[#F6F6F6] text-[12px] focus:border-transparent'>
                  <SelectValue placeholder='00am' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='08am'>08am</SelectItem>
                  <SelectItem value='09am'>09am</SelectItem>
                  <SelectItem value='10am'>10am</SelectItem>
                  <SelectItem value='11am'>11am</SelectItem>
                  <SelectItem value='12am'>12am</SelectItem>
                  <SelectItem value='01pm'>01pm</SelectItem>
                  <SelectItem value='02pm'>02pm</SelectItem>
                  <SelectItem value='03pm'>03pm</SelectItem>
                  <SelectItem value='04pm'>04pm</SelectItem>
                  <SelectItem value='05pm'>05pm</SelectItem>
                  <SelectItem value='06pm'>06pm</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Textarea
            className='h-[86px] resize-none text-[14px]'
            value={message}
            placeholder='Specify the reason why you want to move meeting'
            onChange={handleMessageChange}
          />
        </div>
        <DialogFooter className='justify-between'>
          <DialogClose asChild>
            <Button className='sm:basis-[180px]' disabled>
              Cancel the metting
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleSave} className='sm:basis-[180px]'>
              Reschedule request
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { EditMeetingDialog }
