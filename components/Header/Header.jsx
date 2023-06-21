import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <header className={styles.header}>
        <Link href="/dashboard"><h1>Dashboard</h1></Link>

        <div>
            <p>Logout</p>
            <Link href="/booking"><p>My Booking</p></Link>
        </div>
    </header>
    </>
  )
}

export default Header