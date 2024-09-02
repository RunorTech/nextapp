'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const NavLinks = () => {
    const pathname = usePathname();

    const toggleMenu = () => {
      console.log("menu")
    }

  return (
    <nav className='nav-bar'>
       <div className="desktop-nav">
        <div className="nav-logo">
          TECH LOGO
        </div>
        <div className="nav-links">
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">home</Link>
        </div>
        <div className="nav-icon" onClick={toggleMenu}>
        <MenuOpenIcon />
        </div>
       </div>
        <div className="mobile-nav">
          <div className="side-slide">

          </div>

        </div>
    </nav>
  )
}

export default NavLinks
