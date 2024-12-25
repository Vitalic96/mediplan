import Image from 'next/image'

import { cn } from '@/lib/utils'

interface UserListProps {
  users: UserCard[]
  hasNumbers?: boolean
}

const UserList = ({ users, hasNumbers }: UserListProps) => {
  return (
    <ul className='flex flex-col gap-5'>
      {users.map(({ image, name, description, info, date }, i) => (
        <li
          key={i}
          className={cn(
            'xs:gap-x-5 flex justify-between gap-x-3 gap-y-2 xl:gap-x-6',
          )}
        >
          <div className='2xs:gap-x-5 flex basis-44 items-center gap-x-3 gap-y-2 lg:grow xl:gap-x-6'>
            <Image
              className='h-12 w-12 shrink-0 self-center sm:h-[52px] sm:w-auto'
              src={image}
              width={52}
              height={52}
              alt=''
            />
            <div className=''>
              <h4>{name}</h4>
              {description && (
                <p className='text-[10px] text-gray-500'>{description}</p>
              )}
            </div>
          </div>
          <div
            className={cn(
              'xs:gap-x-5 flex shrink-0 flex-col justify-between gap-x-3 gap-y-2 xl:grow xl:flex-row xl:items-end xl:gap-x-6',
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
      ))}
    </ul>
  )
}

export { UserList }
