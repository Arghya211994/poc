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

const Booking = ({roomdata}) => {
  return (
    <>
    <div className={styles.container}>
          { roomdata.map((item) => (<div key={item.id}>
            <div className={styles.card}>
            <h1>Conference Room: {item.ConferenceRoom}</h1>
            <p>Room Size: {item.RoomSize}</p>
            <p>Air Condition: {item.AirCondition}</p>
            <p>Sitting Capacity: {item.sittingcapacity}</p>
            <p>Wifi Availability: {item.WifiAvailability}</p>
            <p></p>
           <Link href={`/booking/${item.id}`}><button>Book Now</button></Link> 
          </div>
          </div>))}
          </div>
    </>
  )
}

export default Booking