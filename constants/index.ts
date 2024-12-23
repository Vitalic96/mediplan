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
  { position: 'top', label: 'Dashboard', href: '/', Icon: DashboardIcon },
  { position: 'top', label: 'New User', href: '/', Icon: NewUserIcon },
  { position: 'top', label: 'Members', href: '/', Icon: TeamMembersIcon },
  { position: 'top', label: 'Mailbox', href: '/', Icon: MailboxIcon },
  { position: 'top', label: 'Reports', href: '/', Icon: ReportIcon },
  { position: 'top', label: 'Library', href: '/', Icon: BookIcon },
  {
    position: 'top',
    label: 'Notifications',
    href: '/',
    Icon: NotificationIcon,
  },
  { position: 'top', label: 'Community', href: '/', Icon: CommunityIcon },
  { position: 'bottom', label: 'Go Out', href: '/', Icon: LogoutIcon },
] satisfies MenuItem[] as MenuItem[]
