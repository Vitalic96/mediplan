import Image1_1 from '@/assets/images/dashboard/1-1.jpg'
import Image1_2 from '@/assets/images/dashboard/1-2.jpg'
import Image1_3 from '@/assets/images/dashboard/1-3.jpg'
import Image1_4 from '@/assets/images/dashboard/1-4.jpg'
import Image1_5 from '@/assets/images/dashboard/1-5.jpg'
import Image2_1 from '@/assets/images/dashboard/2-1.jpg'
import Image2_2 from '@/assets/images/dashboard/2-2.jpg'
import Image2_3 from '@/assets/images/dashboard/2-3.jpg'
import Image2_4 from '@/assets/images/dashboard/2-4.jpg'
import Image3_1 from '@/assets/images/dashboard/3-1.jpg'
import Image3_2 from '@/assets/images/dashboard/3-2.jpg'
import Image3_3 from '@/assets/images/dashboard/3-3.jpg'
import Image3_4 from '@/assets/images/dashboard/3-4.jpg'

export const mockActivityList = [
  Image1_1,
  Image1_2,
  Image1_3,
  Image1_4,
  Image1_5,
].map(
  (image) =>
    ({
      image,
      name: 'Lorem Ipsum',
      info: 'Lorem Ipsum',
      date: '03.04.2021',
    }) satisfies UserCard,
) as UserCard[]

export const mockSearchList = [Image2_1, Image2_2, Image2_3, Image2_4].map(
  (image) =>
    ({
      image,
      name: 'Lorem Ipsum',
    }) satisfies UserCard,
) as UserCard[]

export const mockCommunityList = [Image3_1, Image3_2, Image3_3, Image3_4].map(
  (image) =>
    ({
      image,
      name: 'Lorem Ipsum',
      description: 'Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
      info: 'Lorem Ipsum',
      date: '03.04.2021',
    }) satisfies UserCard,
) as UserCard[]

export const mockEVisitHistory = [
  {
    doctor: 'Antonin Guillot',
    date: '14.03.2021',
    begin: '18:20',
    end: '19:20',
    period: '1h',
  },
  {
    doctor: 'Irma Rogers',
    date: '14.03.2021',
    begin: '10:20',
    end: '10:40',
    period: '20m',
  },
  {
    doctor: 'Antonin Guillot',
    date: '14.03.2021',
    begin: '18:20',
    end: '19:20',
    period: '1h',
  },
  {
    doctor: 'Irma Rogers',
    date: '14.03.2021',
    begin: '10:20',
    end: '10:40',
    period: '20m',
  },
  {
    doctor: 'Antonin Guillot',
    date: '14.03.2021',
    begin: '18:20',
    end: '19:20',
    period: '1h',
  },
  {
    doctor: 'Irma Rogers',
    date: '14.03.2021',
    begin: '10:20',
    end: '10:40',
    period: '20m',
  },
  {
    doctor: 'Antonin Guillot',
    date: '14.03.2021',
    begin: '18:20',
    end: '19:20',
    period: '1h',
  },
  {
    doctor: 'Irma Rogers',
    date: '14.03.2021',
    begin: '10:20',
    end: '10:40',
    period: '20m',
  },
  {
    doctor: 'Antonin Guillot',
    date: '14.03.2021',
    begin: '18:20',
    end: '19:20',
    period: '1h',
  },
  {
    doctor: 'Irma Rogers',
    date: '14.03.2021',
    begin: '10:20',
    end: '10:40',
    period: '20m',
  },
]

export const mockWeekCalendarList = [
  {
    dayWeek: 'Mon',
    dayMonth: '21',
    time: [
      true,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
    ],
  },
  {
    dayWeek: 'Tue',
    dayMonth: '22',
    time: [
      true,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      true,
    ],
  },
  {
    dayWeek: 'Wed',
    dayMonth: '23',
    time: [
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
    ],
  },
  {
    dayWeek: 'Thu',
    dayMonth: '24',
    time: [
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
    ],
  },
  {
    dayWeek: 'Fri',
    dayMonth: '25',
    time: [
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
    ],
  },
  {
    dayWeek: 'Sat',
    dayMonth: '26',
    time: [
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
    ],
  },
  {
    dayWeek: 'Sun',
    dayMonth: '27',
    time: [
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
    ],
  },
]
