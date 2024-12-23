import Image1 from '@/assets/images/dashboard/1-1.jpg'
import Image2 from '@/assets/images/dashboard/1-2.jpg'
import Image3 from '@/assets/images/dashboard/1-3.jpg'
import Image4 from '@/assets/images/dashboard/1-4.jpg'
import Image5 from '@/assets/images/dashboard/1-5.jpg'

export const mockListActivity = [Image1, Image2, Image3, Image4, Image5].map(
  (image) => ({
    image,
    name: 'Lorem Ipsum',
    info: 'Lorem Ipsum',
    date: '03.04.2021',
  }),
)
