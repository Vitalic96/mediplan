import { forwardRef } from 'react'
import { Search } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { InputWithIcon } from '@/components/input-with-icon'
import { UserList } from '@/components/user-list'
import { mockSearchList } from '@/lib/mocks'

const MembersWidget = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <Card ref={ref} {...props}>
      <Card className='col-span-12 max-h-[450px] lg:col-span-4 lg:max-h-[850px]'>
        <CardHeader className='min-h-[90px] shrink-0 gap-y-8'>
          <CardTitle variant='lg'>Members</CardTitle>
          <InputWithIcon Icon={Search}>
            <Input type='text' placeholder='Search' className='bg-[#F6F9FB]' />
          </InputWithIcon>
        </CardHeader>
        <CardContent className='custom-scroll flex grow flex-col gap-6 overflow-x-hidden'>
          <UserList
            users={Array(10)
              .fill(null)
              .reduce((prev) => [...prev, ...mockSearchList], [])}
          />
        </CardContent>
      </Card>
    </Card>
  )
})

export { MembersWidget }
