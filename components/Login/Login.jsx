"use client"

import React from 'react'
import styles from "./Login.module.css"
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()

  const submitHandler = () => {
    router.push("/dashboard")
  }
  return (
    <>
    <div className={styles.login}>
      <h1>Login form</h1>
      <div>
        <input type="text" placeholder='Enter Email'/>
      </div>

      <div>
        <input type="text" placeholder='Enter Password'/>
      </div>

      <button onClick={submitHandler}>Submit</button>
    </div>
    </>
  )
}

export default Login