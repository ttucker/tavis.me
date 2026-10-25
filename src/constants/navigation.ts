export const MAIN_NAV_ITEMS = [
  {
    to: '/bio',
    name: 'bio',
    label: 'Bio',
    title: 'Bio | tavis.me | Tavis Tucker',
  },
  {
    to: '/mission',
    name: 'mission',
    label: 'Mission',
    title: 'Mission | tavis.me | Tavis Tucker',
  },
  {
    to: '/projects',
    name: 'projects',
    label: 'Projects',
    title: 'Projects | tavis.me | Tavis Tucker',
  },
  {
    to: '/services',
    name: 'services',
    label: 'Services',
    title: 'Services | tavis.me | Tavis Tucker',
  },
  {
    to: '/contact',
    name: 'contact',
    label: 'Contact',
    title: 'Contact | tavis.me | Tavis Tucker',
  },
  {
    to: '/resume',
    name: 'resume',
    label: 'Resumé',
    title: 'Resumé | tavis.me | Tavis Tucker',
  },
] as const

export const HERO_IMAGE_SRCS = [
  '/home.jpg',
  '/bio.jpg',
  '/mission.jpg',
  '/projects.jpg',
  '/services.jpg',
  '/contact.jpg',
  '/resume.jpg',
] as const

export type MainNavItem = (typeof MAIN_NAV_ITEMS)[number]
export type MainNavName = MainNavItem['name']
