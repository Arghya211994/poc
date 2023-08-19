"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Notification = () => {

  const searchParams = useSearchParams()
  const search = searchParams.get('time')

  console.log(search)
  
  return (
    <>
    <p style={{
      margin:"40px",
      marginTop:"50px",
      background:"#0372d530",
      display:"inline",
      position:"absolute",
      padding:"8px 12px",
      borderRadius:"6px",
      boxShadow:"2px 2px 10px #0372d530",
      top:"140px"
    }}>Your Booking Request of &nbsp;<strong>{search}&nbsp;&nbsp;</strong>has been submited...</p>
    </>
  )
}

export default Notification