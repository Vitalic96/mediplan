'use client'

import Image from 'next/image'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export interface UserListProps {
  users: UserCard[]
  onChangeUser?: (user: UserCard) => void
  hasNumbers?: boolean
}

const UserList = ({ users, onChangeUser, hasNumbers }: UserListProps) => {
  const [activeUser, setUser] = useState<UserCard | null>(null)
  const hasChangeEvent = Boolean(onChangeUser)

  const handleChangeUser = (user: UserCard) => {
    onChangeUser && onChangeUser(user)
    setUser(user)
  }

  return (
    <ul className='flex flex-col gap-5'>
      {users.map((user, i) => {
        const { id, image, name, description, info, date } = user
        const isActive = activeUser && activeUser.id === id

        return (
          <li
            key={id}
            className={cn(
              'flex justify-between gap-x-3 gap-y-2 xs:gap-x-5 xl:gap-x-6',
              hasChangeEvent && 'cursor-pointer',
            )}
            onClick={() => hasChangeEvent && handleChangeUser(user)}
          >
            <div className='flex basis-44 items-center gap-x-3 gap-y-2 2xs:gap-x-5 lg:grow xl:gap-x-6'>
              <div
                className={cn(
                  'relative h-12 w-12 shrink-0 self-center rounded-full before:absolute before:inset-0 before:rounded-[inherit] before:border-[3px] before:border-violet before:opacity-0 before:transition-opacity sm:h-[52px] sm:w-auto',
                  isActive && 'before:opacity-100',
                )}
              >
                <Image
                  className='h-full w-full rounded-[inherit]'
                  src={image}
                  width={52}
                  height={52}
                  alt=''
                />
              </div>
              <div className=''>
                <h4
                  className={cn(
                    'transition-colors duration-300',
                    isActive && 'text-violet',
                  )}
                >
                  {name}
                </h4>
                {description && (
                  <p className='text-[10px] text-gray-500'>{description}</p>
                )}
              </div>
            </div>
            <div
              className={cn(
                'flex shrink-0 flex-col justify-between gap-x-3 gap-y-2 xs:gap-x-5 xl:grow xl:flex-row xl:items-end xl:gap-x-6',
                !description && 'xl:items-center',
              )}
            >
              {date && (
                <div className='text-xs text-gray-950 opacity-20 xl:order-2'>
                  {date}
                </div>
              )}
              {(info || hasNumbers) && (
                <div className='grow text-xs text-violet'>
                  {info && <p>{info}</p>}
                  {hasNumbers && (
                    <ul className='flex max-w-20 opacity-40'>
                      <li className='flex-1'>1</li>
                      <li className='flex-1'>2</li>
                      <li className='flex-1'>3</li>
                      <li className='flex-1'>4</li>
                    </ul>
                  )}
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export { UserList }
