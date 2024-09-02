'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLinks = () => {
    const pathname = usePathname();
  return (
    <nav className='nav-bar'>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">home</Link>
    </nav>
  )
}

export default NavLinks
