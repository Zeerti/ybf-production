import type {Metadata} from 'next'
import {Navbar} from '../components/shared/Navbar'
import {Footer} from '../components/shared/Footer'
import './output.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Your Butcher Frank',
    default: 'Your Butcher Frank',
  },
  description: 'Premium meats, deli, and specialty foods',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
