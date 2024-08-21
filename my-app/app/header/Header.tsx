'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import styles from './Header.module.scss'
import Search from '../search/Search'


function Header() {
  const [isDarkMode, setDarkMode] = useState(false)

  const handleChangeMode = (): void => {
    setDarkMode(!isDarkMode);
    document.body.style.background = isDarkMode ? 'white' : 'darkgray'
  }
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Link href='/' className={styles.me} >
          <Image src='/UI Developer.gif' width={40} height={40} alt='' />
          <p>cd.Nguyen</p>
        </Link>
        <div className={styles.navigation}>
          <Search />
          <Link href='/about'>About</Link>
          <Link href='/experience'>Experience</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/blog'>Blog</Link>
          <div style={{ background: isDarkMode ? 'white' : 'darkgray' }} onClick={handleChangeMode}>Dark mode</div>
        </div>
      </div>
    </main >
  )
}

export default Header
