import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
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