'use client'

import {useState} from 'react'
import {Menu, X} from 'lucide-react'
import Link from 'next/link'

interface MenuItem {
  href: string
  label: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems: MenuItem[] = [
    {href: '/bundles', label: 'Bundles'},
    {href: '/deli', label: 'Deli'},
    {href: '/specialty-meats', label: 'Specialty Meats'},
    {href: '/lunch', label: 'Lunch Special'},
    {
      href: 'tel:3037723281',
      label: '(303) 772-3281',
      className: 'font-bold md:cursor-default',
      onClick: (e) => {
        if (window.innerWidth >= 768) {
          e.preventDefault()
        }
      },
    },
  ]

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Your Butcher Frank" className="h-12 w-auto" />
            <span className="text-xl font-bold hidden sm:inline">Your Butcher Frank</span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`hover:text-brand-500 transition-colors ${item.className || ''}`}
                onClick={item.onClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-2 hover:text-brand-500 transition-colors ${item.className || ''}`}
                onClick={(e) => {
                  setIsOpen(false)
                  item.onClick?.(e)
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
