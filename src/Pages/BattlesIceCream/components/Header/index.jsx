import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt='Battles Ice Cream' />
    </header>
  )
}

export default Header
