import { ComponentType } from 'react'

import DashboardIcon from '@/assets/icons/dashboard.svg'
import NewUserIcon from '@/assets/icons/new-user.svg'
import TeamMembersIcon from '@/assets/icons/team-members.svg'
import MailboxIcon from '@/assets/icons/mailbox.svg'
import ReportIcon from '@/assets/icons/report.svg'
import BookIcon from '@/assets/icons/book.svg'
import NotificationIcon from '@/assets/icons/notification.svg'
import CommunityIcon from '@/assets/icons/community.svg'
import LogoutIcon from '@/assets/icons/logout.svg'

type MenuItem = {
  position: 'top' | 'bottom'
  label: string
  href: string
  Icon: ComponentType<{ className?: string }>
}

export const menuList = [
  {
    position: 'top',
    label: 'Dashboard',
    href: '/dashboard',
    Icon: DashboardIcon,
  },
  // {
  //   position: 'top',
  //   label: 'New User',
  //   href: '/dashboard/add-user/',
  //   Icon: NewUserIcon,
  // },
  {
    position: 'top',
    label: 'Members',
    href: '/dashboard/members/',
    Icon: TeamMembersIcon,
  },
  // {
  //   position: 'top',
  //   label: 'Mailbox',
  //   href: '/dashboard/mailbox/',
  //   Icon: MailboxIcon,
  // },
  // {
  //   position: 'top',
  //   label: 'Reports',
  //   href: '/dashboard/reports/',
  //   Icon: ReportIcon,
  // },
  // {
  //   position: 'top',
  //   label: 'Library',
  //   href: '/dashboard/library/',
  //   Icon: BookIcon,
  // },
  // {
  //   position: 'top',
  //   label: 'Notifications',
  //   href: '/dashboard/notifications/',
  //   Icon: NotificationIcon,
  // },
  // {
  //   position: 'top',
  //   label: 'Community',
  //   href: '/dashboard/community/',
  //   Icon: CommunityIcon,
  // },
  { position: 'bottom', label: 'Go Out', href: '/', Icon: LogoutIcon },
] satisfies MenuItem[] as MenuItem[]

export const patientTabList = [
  'Basic Info',
  // 'Circle',
  // 'Wall Activity',
  // 'Smoking Report',
  // 'Journal',
  // 'Pain & Sympton',
  // 'Depressions',
  // 'Weight',
  // 'Note',
  'E-visit history',
] as const
