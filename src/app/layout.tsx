import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { PageHeader } from '@/components'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang={'en'}>
      <body className={inter.className}>
        <PageHeader />

        {children}
      </body>
    </html>
  )
}

export default RootLayout
