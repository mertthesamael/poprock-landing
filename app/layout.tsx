import { googleSans } from '@/libs/font'
import type { Metadata } from 'next'
import '@/style/reset.scss'
import '@/style/global.scss'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pop Rock Crystal',
  description: 'Landing Page for Crystal Shop | Mert Enercan',
  openGraph:{
    images : ["https://img.joomcdn.net/5f9d29ccb679084d72c2159581604fb9e73cd000_original.jpeg"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={googleSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
