'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import styles from './Header.module.scss'


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
          <Link href='#'>About</Link>
          <Link href='#'>Experience</Link>
          <Link href='#'>Contact</Link>
          <Link href='#'>Contact</Link>
          <div style={{ background: isDarkMode ? 'white' : 'darkgray' }} onClick={handleChangeMode}>Dark mode</div>
        </div>
      </div>
    </main >
  )
}

export default Header
