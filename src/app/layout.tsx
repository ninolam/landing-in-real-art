import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@fontsource/unbounded'

import { AppWrapper } from '@/context'
import { Providers } from './providers'
import classNames from 'classnames'
import { fonts } from './fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'In Real Art',
  description: 'Landing page In Real Art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, fonts.rubik.variable)}>
        <AppWrapper>
            <Providers>
              {children}
            </Providers>
          </AppWrapper>
        
      </body>
    </html>
  )
}
