'use client'

import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

import styles from './Header.module.scss'

interface IState {
  darkMode: boolean,
  className: string,
  handleChangeMode: () => void
}

function Header(props: IState) {
  return (
    <main className={classNames(props.className, styles.main)}>
      <a href='./'><Image src={'/UI Developer.gif'} alt='' width={40} height={40} />congdat.nguyen</a>
      <div>
        <a href="/about">About</a>
        <a href="/experience">Experience</a>
        <a href="/contact">Contact</a>
        <a href="/blog">Blog</a>
        <div onClick={props.handleChangeMode} style={{ background: props.darkMode ? 'white' : 'darkgray' }}>Dark mode</div>
      </div>
    </main>
  )
}

export default Header
