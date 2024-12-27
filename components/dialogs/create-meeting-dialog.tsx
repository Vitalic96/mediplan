import { DialogProps } from '@radix-ui/react-dialog'
import { Search } from 'lucide-react'

import { getDateFormat } from '@/lib/utils'
import { mockSearchList } from '@/lib/mocks'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { InputWithIcon } from '../input-with-icon'
import { UserList } from '../user-list'

const CreateMeetingDialog = ({
  date,
  onSave,
  ...props
}: DialogProps & { date: Date | undefined; onSave: (date: Date) => void }) => {
  const handleSave = () => {
    // save logic
    onSave(date ?? new Date())
  }

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adding the meeting</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-8 py-4'>
          <div className='flex items-center justify-center'>
            <div className='text-[22px] text-[#2D1143]'>
              {date && getDateFormat(date)}
            </div>
          </div>
          <div className='flex justify-between gap-x-12 gap-y-4'>
            <InputWithIcon
              className='flex w-full max-w-[274px] items-center gap-[10px] text-[12px]'
              Icon={Search}
            >
              <Input type='text' placeholder='Search' />
            </InputWithIcon>

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
          <div>
            <UserList
              className='custom-scroll max-h-[270px] overflow-auto'
              onChangeUser={() => {}}
              users={mockSearchList}
            />
          </div>
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

export { CreateMeetingDialog }
