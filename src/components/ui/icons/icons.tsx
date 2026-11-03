import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
)

export const TruckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
    <circle cx="7" cy="17" r="1.800" />
    <circle cx="17" cy="17" r="1.800" />
  </Icon>
)

export const CardIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18M7 15h3" />
  </Icon>
)

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="6.500" />
    <path d="m16 16 4 4" />
  </Icon>
)

export const BoxIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 8h16v11H4zM4 8l2-4h12l2 4M10 12h4" />
  </Icon>
)

export const HeartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20s-7-4.400-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
  </Icon>
)

export const UserIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.500 18c1.500-2.500 3.500-3.500 5.500-3.500s4 1 5.500 3.500" />
  </Icon>
)

export const CartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 4h2.500l2 11h10l2-8H7" />
    <circle cx="9" cy="19" r="1.300" />
    <circle cx="17" cy="19" r="1.300" />
  </Icon>
)

export const CrownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4 17 1.500-9 4.500 4 2-6 2 6 4.500-4L20 17zM4 20h16" />
  </Icon>
)

export const DevicesIcon = (p: IconProps) => (
  <Icon {...p} strokeWidth="1.300">
    <rect x="2" y="4" width="14" height="10" rx="1" />
    <path d="M6 18h6M9 14v4" />
    <rect x="15" y="8" width="7" height="12" rx="1.200" />
  </Icon>
)

export const StoreIcon = (p: IconProps) => (
  <Icon {...p} strokeWidth="1.300">
    <path d="M3 9 5 4h14l2 5v2H3zM5 11v9h14v-9M9 20v-5h6v5" />
  </Icon>
)

export const DrinkIcon = (p: IconProps) => (
  <Icon {...p} strokeWidth="1.300">
    <path d="M9 3h4v4l2 3v10H7V10l2-3zM15 15h4v5h-4z" />
  </Icon>
)

export const ToolsIcon = (p: IconProps) => (
  <Icon {...p} strokeWidth="1.300">
    <path d="m4 20 9-9M7 4l3 3-3 3-3-3zM20 4l-4 4M12 12l6 6" />
  </Icon>
)

export const HealthIcon = (p: IconProps) => (
  <Icon {...p} strokeWidth="1.300">
    <path d="M12 9c-1-2-4-2-4 0 0 2 4 4 4 4s4-2 4-4c0-2-3-2-4 0ZM3 16l4-1 6 2 6-3 2 2-8 4-7-1z" />
  </Icon>
)

export const SportIcon = (p: IconProps) => (
  <Icon {...p} strokeWidth="1.300">
    <circle cx="13" cy="4.500" r="1.800" />
    <path d="m11 8 4 1 1 4-3 2 2 5M11 8l-3 4 3 2M3 20h18" />
  </Icon>
)

export const FashionIcon = (p: IconProps) => (
  <Icon {...p} strokeWidth="1.300">
    <path d="M9 3h2l1 4 1-4h2l-1 6 3 12H7L10 9zM17 5l3 2-3 3-3-3z" />
  </Icon>
)

export const InstagramIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.500" />
    <circle cx="12" cy="12" r="3.500" />
    <circle cx="16.800" cy="7.200" r=".6" fill="currentColor" />
  </Icon>
)

export const FacebookIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
  </Icon>
)

export const LinkedinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 10v8M6 6.500v.1M10 18v-8m0 3c0-2 1.500-3 3-3s3 1 3 3v5" />
  </Icon>
)
