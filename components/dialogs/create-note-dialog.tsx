import { ChangeEventHandler, useState } from 'react'
import { DialogProps } from '@radix-ui/react-dialog'

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

const CreateNoteDialog = (props: DialogProps) => {
  const [note, setNote] = useState('')

  const handleNoteChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setNote(event.target.value)
  }

  const handleSave = () => {
    // save logic
  }

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adding the note</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='py-4 lg:pb-12 lg:pl-5 lg:pr-12 lg:pt-7'>
          <label className='flex flex-col gap-x-5 gap-y-2 md:flex-row'>
            <div className='text-[12px] text-[#817474] md:pt-2'>Note</div>
            <Textarea
              className='h-[350px] resize-none lg:p-6 lg:text-lg'
              value={note}
              onChange={handleNoteChange}
            />
          </label>
        </div>
        <DialogFooter className='justify-between'>
          <DialogClose asChild>
            <Button className='sm:basis-[180px]' disabled>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleSave} className='sm:basis-[180px]'>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { CreateNoteDialog }
