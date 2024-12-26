import { PatientWidget } from './_components/patient-widget'
import { MembersWidget } from './_components/members-widget'

const MembersPage = () => {
  return (
    <div className='grid grid-cols-10 gap-5 py-12'>
      <MembersWidget className='col-span-12 max-h-[450px] flex-1 lg:col-span-4 lg:max-h-[850px]' />
      <PatientWidget className='col-span-12 lg:col-span-6' />
    </div>
  )
}

export default MembersPage
