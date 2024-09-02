'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { toggleMenu } from '@/lib/utils';

const NavLinks = () => {
  const pathname = usePathname();
  toggleMenu();

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
          <MenuOpenIcon style={{ width: 40, height: 40 }} />
        </div>
      </div>
      <div className="mobile-nav" id='mobile-nav'>
        <div className="close-icon" onClick={toggleMenu}>
          <CloseIcon />
        </div>
        <div className="side-slide">

        </div>

      </div>
    </nav>
  )
}

export default NavLinks
