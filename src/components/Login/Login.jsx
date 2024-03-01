import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
           <div className={styles.login__container}>
             <h3 className={styles.login__heading}>Already have an account ?</h3>
             <p>Your Personal Job finder</p>
             <input type='text' name='email' placeholder='Email' />
             <input type='password' name='password' placeholder='Password' />
             <button className={styles.login__submitbtn}>Login</button>
            <p className={styles.login__text}>Don't have an account? <a className={styles.login__navigate}> Sign Up</a></p>
           </div>
    </div>
  )
}

export default Login