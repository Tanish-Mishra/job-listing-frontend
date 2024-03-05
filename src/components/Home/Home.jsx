import React, { useEffect } from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    // Cookies.get("token")
    const token = Cookies.get('token');
    console.log(token)
  },[])
  return ( 
    <div className={styles.home}>
         <div className={styles.header}>
               <div className={styles.header__name}>Jobfinder</div>
               <div className={styles.header__buttons}>
                  <button className={styles.header__btn} onClick={()=>{navigate('/login')}}>Login</button>
                  <button className={`${styles.header__btn} ${styles.header__register}`} onClick={()=>{navigate('/register')}}>Register</button>
               </div>
         </div>
         <div className={styles.home__body}>
                
                </div>
    </div>
  )
}

export default Home