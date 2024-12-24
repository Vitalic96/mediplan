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
          className={cn('flex gap-6', !description && 'items-center')}
        >
          <Image
            className='shrink-0 self-start'
            src={image}
            width={52}
            height={52}
            alt=''
          />
          <div className='w-[150px] shrink-0'>
            <h4>{name}</h4>
            {description && (
              <p className='text-[10px] text-gray-500'>{description}</p>
            )}
          </div>
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
          {date && (
            <div className='text-xs text-gray-950 opacity-20'>{date}</div>
          )}
        </li>
      ))}
    </ul>
  )
}

export { UserList }
