import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  variant = 'white',
  className,
  href = '/',
}: {
  variant?: 'white' | 'black'
  className?: string
  href?: string | null
}) {
  const src = variant === 'white' ? '/logo-white.png' : '/logo-black.png'
  const img = (
    <Image
      src={src || '/placeholder.svg'}
      alt="Farnaz Gholami logo"
      width={48}
      height={42}
      priority
      className={cn('h-9 w-auto object-contain', className)}
    />
  )
  if (href === null) return img
  return (
    <Link href={href} aria-label="Farnaz Gholami — Home" className="inline-flex">
      {img}
    </Link>
  )
}
