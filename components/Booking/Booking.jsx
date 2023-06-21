import React from 'react'
import styles from './Booking.module.css'
import Link from 'next/link'

const data = [
  {
    id:1,
    localtion:"shimla",
  },
  {
    id:2,
    localtion:"rajasthan",
  },
  {
    id:3,
    localtion:"kashmir",
  },
  {
    id:4,
    localtion:"goa",
  },
  {
    id:5,
    localtion:"bangalore",
  },
  {
    id:6,
    localtion:"kolkata",
  }
]

const Booking = () => {
  return (
    <>
    <div className={styles.container}>
          { data.map((item) => (<div key={item.id}>
            <div className={styles.card}>
            <p>Location-shimla</p>
           <Link href={`/booking/${item.id}`}><button>See more</button></Link> 
          </div>
          </div>))}
          </div>
    </>
  )
}

export default Booking