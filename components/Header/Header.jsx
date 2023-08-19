import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <header className={styles.header}>
        <Link href="/dashboard">
          <div className='hero-logo'>
          <img src="/logo2.png" alt="" width={70} height={70}/>
          </div> 
        </Link>

        <div>
            
            <p>My Booking</p>
            <p>Logout</p>
        </div>
    </header>
    </>
  )
}

export default Header