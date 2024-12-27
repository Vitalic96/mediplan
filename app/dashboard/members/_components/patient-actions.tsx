'use client'

import Image from 'next/image'
import { ChangeEventHandler, useState } from 'react'
import { Bell, Ellipsis, Trash2, UserRound } from 'lucide-react'

import { Button } from '@/components/ui/button'
import TelegramIcon from '@/assets/icons/telegram.svg'

interface PatientActionsProps {
  user: UserCard
}

const PatientActions = ({ user }: PatientActionsProps) => {
  const [image, setImage] = useState<string | null>(null)
  const userImage = image ?? user.image

  const handleLoadImage: ChangeEventHandler<HTMLInputElement> = (event) => {
    const [file] = event.target.files ?? []

    if (file == null) {
      return
    }

    const fileReader = new FileReader()

    fileReader.addEventListener('load', (event) => {
      if (typeof fileReader.result === 'string') {
        setImage(fileReader.result)
      }
    })

    fileReader.readAsDataURL(file)
  }

  const handleDelete = () => {
    // delete logic
  }

  return (
    <div className='flex items-center gap-5'>
      <label className='relative flex aspect-square w-[100px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-white xl:w-[150px]'>
        <UserRound size={'50%'} />
        {userImage && (
          <Image
            src={userImage}
            alt=''
            className='absolute bottom-0 left-0 right-0 top-0 h-full w-full animate-fadein rounded-[inherit] object-cover'
          />
        )}
        <input type='file' onChange={handleLoadImage} className='hidden' />
      </label>
      <div className='flex grow flex-col gap-2 xl:flex-row'>
        <div className='grow'>
          <div className='text-xl leading-[1.3] 2xs:text-2xl xl:max-w-[250px] xl:text-[28px]'>
            {user.name}
          </div>
          <Button
            variant='link'
            className='hidden text-base text-[#FF5454] xl:inline-flex'
            onClick={handleDelete}
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
  )
}

export { PatientActions }
