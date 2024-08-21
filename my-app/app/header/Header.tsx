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
      <a href='./'><Image src={'/UI Developer.gif'} alt='' width={40} height={40} />congdat.nguyen</a>
      <div>
        <a href="/about">About</a>
        <a href="/experience">Experience</a>
        <a href="/contact">Contact</a>
        <a href="/blog">Blog</a>
        <div onClick={handleChangeMode} style={{ background: isDarkMode ? 'white' : 'darkgray' }}>Dark mode</div>
      </div>
    </main>
  )
}

export default Header
