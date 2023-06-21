"use client"
import React from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import styles from './BookingDetail.module.css'
import {useRouter} from 'next/navigation'

const BookingDetail = () => {

  const router = useRouter()
  const submit = () => {
    router.push('/notification')
  }
  return (
    <>
    <div className={styles.calender}>
      <h1>Choose Date:</h1>
    <CalendarComponent/>

    <h3 >Time Slots</h3>
    <div className={styles.timeslot}>
     
      <div>
        <input type="checkbox" />
        <div>10 -12</div>
      </div>

      <div>
        <input type="checkbox" />
        <div>1 - 3</div>
      </div>

      <div>
        <input type="checkbox" />
        <div>4 - 6</div>
      </div>

      <div>
        <input type="checkbox" />
        <div>7 - 9</div>
      </div>
      
      <button onClick={submit}>Book Now</button>
    </div>

    </div>
    </>
    
  )
}

export default BookingDetail