export const CONTACT = {
  email: 'farnazgholami.design@gmail.com',
  linkedin: 'https://www.linkedin.com/in/farnaz-gholami-4165b9345',
  mailto: 'mailto:farnazgholami.design@gmail.com',
  resume: '/Resume.pdf',
}

export const NAV_LINKS = [
  { label: 'Works', href: '/works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Draft', href: '/draft' },
  { label: 'Resume', href: '/Resume.pdf' },
]

// Inline horizontal nav used on desktop (order follows the desktop wireframes).
export const DESKTOP_NAV = [
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Draft', href: '/draft' },
  { label: 'Resume', href: '/Resume.pdf' },
  { label: 'Contact', href: '/#contact' },
]

// Custom-event bus so any header hamburger can open the global menu overlay.
export const MENU_OPEN_EVENT = 'farnaz:open-menu'

export function openSiteMenu() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(MENU_OPEN_EVENT))
  }
}
