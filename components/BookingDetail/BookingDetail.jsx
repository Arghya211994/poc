// "use client"
// import React,{useState} from 'react'
// import styles from './BookingDetail.module.css'
// import {useRouter} from 'next/navigation'
// import Calendar from 'react-calendar'

// const BookingDetail = () => {

//   const [value, onChange] = useState(new Date());
//   const [appointments, setAppointments] = useState({
//     '2023-06-25': ['9:00', '10:00'],
//     '2023-06-26': [],
//     '2023-06-27': ['11:00', '14:00', '16:00'],
//     '2023-06-19': ['12:05', '2:08', '8:00', '9:10']
//   });

//   console.log(value)
//   const handleDateChange = (value) => {
//     onChange(value);
//   };

//   const formatDate = (date) => {
//     const d = new Date(date);
//     let month = '' + (d.getMonth() + 1);
//     let day = '' + d.getDate();
//     const year = d.getFullYear();

//     if (month.length < 2) 
//         month = '0' + month;
//     if (day.length < 2) 
//         day = '0' + day;

//     return [year, month, day].join('-');
//   }

//   const [checkedItems, setCheckedItems] = useState({}); // This will store our checkbox state

//   const handleCheckboxChange = (event, index) => {
//     setCheckedItems({ ...checkedItems, [index]: event.target.checked });
//   };

//   console.log(checkedItems)

// const router = useRouter()

// const submitHandler = () => {
//   router.push('/notification')
// }
//   return (
//     <>
//     <div className={styles.calender}>

//     <h1 style={{marginBlock:"40px"}}>Calender</h1>
//     <div>
//       <Calendar
//         onChange={handleDateChange}
//         value={value}
//       />
//       <h2 className={styles.h2}>Available times for {formatDate(value)}</h2>
//       <div className={styles.timebox}>
//       {appointments[formatDate(value)] ? (
//         appointments[formatDate(value)].length > 0 ? (
//           appointments[formatDate(value)].map((time, index) => (
//             <div key={index} className={styles.timeslot}>
//               <input
//                   type="checkbox"
//                   checked={checkedItems[index] || false}
//                   onChange={(event) => handleCheckboxChange(event, index)}
//                 />
//               <p>{time}</p>
//             </div>
//           ))
//         ) : (
//           <p>No available times</p>
//         )
//       ) : (
//         <p>No data for this date</p>
//       )}

//       <button className={styles.btn} 
//       onClick={submitHandler}

//       disabled={!appointments[formatDate(value)] || appointments[formatDate(value)].length === 0}
//       style={{background: (appointments[formatDate(value)] && appointments[formatDate(value)].length === 0) ? "red" : "#e54678"}}
//       >Book</button>
//       </div>

//     </div>
//  </div>
//     </>

//   )
// }

// export default BookingDetail


"use client"
import React, { useState } from 'react'
import styles from './BookingDetail.module.css'
import { useRouter } from 'next/navigation'
import Calendar from 'react-calendar'
import dynamic from 'next/dynamic';

const DynamicCalendar = dynamic(() => import('react-calendar'), { ssr: false });

const BookingDetail = () => {

  const [value, onChange] = useState(new Date());
  const [appointments, setAppointments] = useState({
    '2023-06-25': ['9:00', '10:00'],
    '2023-06-26': [],
    '2023-06-27': ['11:00', '14:00', '16:00'],
    '2023-06-19': ['12:05', '2:08', '8:00', '9:10']
  });

  console.log(value)
  const handleDateChange = (value) => {
    onChange(value);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  const router = useRouter()

  const [selectedTimeslot, setSelectedTimeslot] = useState(null); // This will store the selected timeslot

  const handleTimeslotClick = (time) => {
    setSelectedTimeslot(time);
    router.push(`/notification?time=${time}`)
  };

  console.log(selectedTimeslot)

  return (
    <>
      <div className={styles.calender}>

        <h1 style={{ marginBlock: "40px" }}>Calender</h1>
        <div>
          <DynamicCalendar
            onChange={handleDateChange}
            value={value}
          />
          <h2 className={styles.h2}>Available times for {formatDate(value)}</h2>
          <div className={styles.timebox}>
            {appointments[formatDate(value)] ? (
              appointments[formatDate(value)].length > 0 ? (
                appointments[formatDate(value)].map((time, index) => (
                  <div key={index} className={styles.timeslot} onClick={() => handleTimeslotClick(time)}>

                    <p>{time}</p>
                  </div>
                ))
              ) : (
                <p>No available times</p>
              )
            ) : (
              <p>No data for this date</p>
            )}
            
          </div>

        </div>
      </div>
    </>

  )
}

export default BookingDetail