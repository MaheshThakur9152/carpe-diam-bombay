import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carpediam — Objects with a point of view',
  description: 'Jewellery and objects for those who look closer.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
