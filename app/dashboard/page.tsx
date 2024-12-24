import { Search } from 'lucide-react'

import { UserList } from '@/components/user-list'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { InputWithIcon } from '@/components/input-with-icon'
import { Input } from '@/components/ui/input'
import {
  mockActivityList,
  mockCommunityList,
  mockSearchList,
} from '@/lib/mocks'

const DashboardPage = () => {
  return (
    <div className='grid grid-cols-12 gap-5 py-12'>
      <Card className='col-span-6 flex max-h-[415px] flex-col'>
        <CardHeader className='min-h-[90px] gap-x-6 gap-y-3'>
          <CardTitle asChild>
            <h3>Calendar</h3>
          </CardTitle>
        </CardHeader>
        <CardContent className='flex grow flex-col gap-6 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-violet [&::-webkit-scrollbar-track]:bg-violet-100 [&::-webkit-scrollbar]:w-[3px]'></CardContent>
      </Card>
      <Card className='col-span-6 flex max-h-[415px] flex-col'>
        <CardHeader className='min-h-[90px] gap-x-6 gap-y-3'>
          <CardTitle asChild>
            <h3>Pacient Wall Activity</h3>
          </CardTitle>
        </CardHeader>
        <CardContent className='flex grow flex-col gap-6 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-violet [&::-webkit-scrollbar-track]:bg-violet-100 [&::-webkit-scrollbar]:w-[2px]'>
          <UserList users={mockActivityList} />
        </CardContent>
      </Card>
      <Card className='col-span-6 flex max-h-[415px] flex-col'>
        <CardHeader className='min-h-[90px] gap-x-6 gap-y-3'>
          <CardTitle>Search member</CardTitle>
          <InputWithIcon Icon={Search}>
            <Input type='text' placeholder='Search' />
          </InputWithIcon>
        </CardHeader>
        <CardContent className='flex grow flex-col gap-6 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-violet [&::-webkit-scrollbar-track]:bg-violet-100 [&::-webkit-scrollbar]:w-[2px]'>
          <UserList users={mockSearchList} />
        </CardContent>
      </Card>
      <Card className='col-span-6 flex max-h-[415px] flex-col'>
        <CardHeader className='min-h-[90px] flex-row items-center gap-x-6 gap-y-3'>
          <CardTitle>Person Community</CardTitle>
          <InputWithIcon Icon={Search} className='grow'>
            <Input type='text' placeholder='Search' />
          </InputWithIcon>
        </CardHeader>
        <CardContent className='flex grow flex-col gap-6 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-violet [&::-webkit-scrollbar-track]:bg-violet-100 [&::-webkit-scrollbar]:w-[2px]'>
          <UserList users={mockCommunityList} hasNumbers />
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardPage
