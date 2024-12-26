import { Search } from 'lucide-react'

import { UserList } from '@/components/user-list'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { InputWithIcon } from '@/components/input-with-icon'
import { Input } from '@/components/ui/input'
import { CalendarWidget } from './_components/calendar-widget'
import {
  mockActivityList,
  mockCommunityList,
  mockSearchList,
} from '@/lib/mocks'

const DashboardPage = () => {
  return (
    <div className='grid grid-cols-12 gap-5 py-12'>
      <CalendarWidget className='col-span-12 lg:col-span-6 lg:max-h-[415px]' />
      <Card className='col-span-12 max-h-[450px] lg:col-span-6 lg:max-h-[415px]'>
        <CardHeader className='min-h-[90px] gap-x-6 gap-y-3'>
          <CardTitle asChild>
            <h3>Pacient Wall Activity</h3>
          </CardTitle>
        </CardHeader>
        <CardContent className='custom-scroll flex grow flex-col gap-6 overflow-x-hidden'>
          <UserList users={mockActivityList} />
        </CardContent>
      </Card>
      <Card className='col-span-12 max-h-[450px] lg:col-span-6 lg:max-h-[415px]'>
        <CardHeader className='min-h-[90px] gap-x-6 gap-y-3'>
          <CardTitle>Search member</CardTitle>
          <InputWithIcon Icon={Search}>
            <Input type='text' placeholder='Search' />
          </InputWithIcon>
        </CardHeader>
        <CardContent className='custom-scroll flex grow flex-col gap-6 overflow-x-hidden'>
          <UserList users={mockSearchList} />
        </CardContent>
      </Card>
      <Card className='col-span-12 max-h-[450px] lg:col-span-6 lg:max-h-[415px]'>
        <CardHeader className='min-h-[90px] flex-col gap-x-6 gap-y-3 xl:flex-row xl:items-center'>
          <CardTitle>Person Community</CardTitle>
          <InputWithIcon Icon={Search} className='grow'>
            <Input type='text' placeholder='Search' />
          </InputWithIcon>
        </CardHeader>
        <CardContent className='custom-scroll grow gap-6 overflow-x-hidden'>
          <UserList users={mockCommunityList} hasNumbers />
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardPage
