'use client'

import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

import styles from './Header.module.scss'

interface IState {
  className: string
}

function Header(props: IState) {
  const [isDarkMode, setDarkMode] = useState(false)

  const handleChangeMode = (): void => {
    setDarkMode(!isDarkMode);
    document.body.style.background = isDarkMode ? 'white' : 'darkgray'
  }
  return (
    <main className={classNames(props.className, styles.main)}>
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
