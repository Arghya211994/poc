import React from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='index'>
    <h1 >PROOF OF CONCEPT (POC)</h1>
    <Link href="/login" className='login'>Sign in</Link>
    </div>
    </>
  )
}

export default page