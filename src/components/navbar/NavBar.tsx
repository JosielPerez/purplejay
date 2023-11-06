"use client"
import React from 'react'
import './style.css'
import Link from 'next/link'

function NavBar({navId}:any) {

  return (   
      <nav className="sidebar">
        <ul className="list">
          <img src="/circle_dp.jpg" id="nav-bar-im" />
          <li>
            <Link href="dashboard" className={navId === 'dashboard' ? 'active' : ''} >Dashboard</Link>
          </li>
          <li>
            <Link href="/portfolio" className={navId === 'portfolio' ? 'active' : ''}>Portfolio</Link>
          </li>
          <li>
            <Link href="/achievement" className={navId === 'achievement' ? 'active' : ''}>Achievement</Link>
          </li>
          <li>
            <Link href="/settings" className={navId === 'settings' ? 'active' : ''}>Settings</Link>
          </li>
          <li>
            <Link href="/">Log out</Link>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar