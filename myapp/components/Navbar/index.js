import Link from 'next/link'
import React from 'react'
import AuthLinks from './AuthLinks'
import StyledNavLink from './StyledNavLink'

const Navbar = () => {
  return (
    <header className='px-4 py-12'>
        <nav className='flex justify-between mx-auto max-w-screen-xl border-b py-8'>
            <div className='flex items-center gap-4'>
              <StyledNavLink href={'/'}>All Post</StyledNavLink>
              <Link href={'/about'}>About</Link>
              <Link href={'/users'}>Users</Link>
            </div>

            <Link href={'/'}>Logo</Link>
          
            <AuthLinks />
        </nav>
    </header>
  )
}

export default Navbar