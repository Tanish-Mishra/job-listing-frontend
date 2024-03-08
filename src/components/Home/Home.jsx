import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

import Profile from '/assets/images/profile.png'
import Cookies from 'js-cookie'
const Home = () => {
  const navigate = useNavigate()
  const [token,setToken] = useState()
  useEffect(()=>{
    // Cookies.get("token") 
      const getToken = JSON.parse(localStorage.getItem('token'))
      setToken(getToken)

  },[])
  const removeToken = () => {
   const  tokenValue = ""
   setToken(tokenValue)
   localStorage.removeItem('token');

  }
  return ( 
    <div className={styles.home}>
         <div className={styles.header}>
               <div className={styles.header__name}>Jobfinder</div>
               { !token ?
               <div className={styles.header__buttons}>
                  <button className={styles.header__btn} onClick={()=>{navigate('/login')}}>Login</button>
                  <button className={`${styles.header__btn} ${styles.header__register}`} onClick={()=>{navigate('/register')}}>Register</button>
               </div> : 
               <div className={styles.header__recruiter_container}>
                  <button className={styles.header__btn} onClick={()=>{
                 removeToken()
                  }}>Logout</button>
                 <span className={styles.header__recruiter}>Hello! Recruiter </span>
                <div className={styles.header__img}>
                <img src={Profile} alt='error' height='50px' width='50px' style={{
                }}/> 
                </div>
               </div> 
              
               
}
         </div>
         <div className={styles.home__body}>
                
                </div>
    </div>
  )
}

export default Home