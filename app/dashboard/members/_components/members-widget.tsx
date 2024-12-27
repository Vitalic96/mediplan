import { forwardRef } from 'react'
import { Search } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { InputWithIcon } from '@/components/input-with-icon'
import { UserList, UserListProps } from '@/components/user-list'

interface MembersWidgetProps
  extends UserListProps,
    React.HTMLAttributes<HTMLDivElement> {}

const MembersWidget = forwardRef<HTMLDivElement, MembersWidgetProps>(
  ({ users, onChangeUser, ...props }, ref) => {
    return (
      <Card ref={ref} {...props}>
        <Card className='col-span-12 max-h-[450px] lg:col-span-4 lg:max-h-[850px]'>
          <CardHeader className='shrink-0 lg:gap-y-8'>
            <CardTitle variant='lg'>Members</CardTitle>
            <InputWithIcon Icon={Search}>
              <Input
                type='text'
                placeholder='Search'
                className='bg-[#F6F9FB]'
              />
            </InputWithIcon>
          </CardHeader>
          <CardContent className='custom-scroll flex grow flex-col gap-6 overflow-x-hidden'>
            <UserList users={users} onChangeUser={onChangeUser} />
          </CardContent>
        </Card>
      </Card>
    )
  },
)

export { MembersWidget }
