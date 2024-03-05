import React, { useEffect, useState } from 'react'
import styles from './JobDetails.module.css'
import { useAsyncError, useNavigate, useParams } from 'react-router-dom'

import { fetchJobById } from '../../apis/job'

const JobDetails = () => {
    const navigate = useNavigate()
    const {id} = useParams()
   const [jobData,setJobData] = useState()
   const [weeksData,setWeeksData] = useState()
   
    useEffect(()=>{
        fetchJob()
    },[])

    const fetchJob = async() => {
        const response = await fetchJobById(id);
        setJobData(response?.job)
        getWeeksSinceCreation(response?.job.createdAt)
    }

    function getWeeksSinceCreation(createdAtTimestamp) {
        // Convert MongoDB timestamp to JavaScript Date object
        const createdAtDate = new Date(createdAtTimestamp);
    
        // Get the current date
        const currentDate = new Date();
    
        // Calculate the time difference in milliseconds
        const timeDifference = currentDate.getTime() - createdAtDate.getTime();
    
        // Convert milliseconds to weeks
        const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
        setWeeksData(weeks)
        console.log(weeks)
        return weeks;
    }

    

    

  return (

 <div className={styles.job}>
    <div className={styles.header}>
          <div className={styles.header__name}>Jobfinder</div>
          <div className={styles.header__buttons}>
             <button className={styles.header__btn} onClick={()=>{navigate('/login')}}>Login</button>
             <button className={`${styles.header__btn} ${styles.header__register}`} onClick={()=>{navigate('/register')}}>Register</button>
          </div>
    </div>

    <div className={styles.job__body}>

           <div className={styles.job__header}>
            <p>
       {jobData?.description}
            </p>
           </div>

           <div className={styles.job__main}>

            <span className={styles.job__main_header}>{weeksData}w ago &#183; {jobData?.locationType} &nbsp;{jobData?.companyName}</span>
            <div className={styles.job__main_title}> <h3>{jobData?.title}</h3>
            <button className={styles.edit__job}>Edit Job</button>
            </div>
            <span className={styles.job__main_location}>{jobData?.location}</span>
             <div className={styles.job__main_time_duration}> 
             <div className={styles.job__main_time_stipend}><span>Stipend</span> <span>Duration</span> </div>
             <div className={styles.job__main_time_salary}><span>Rs.{jobData?.salary}</span> <span>{jobData?.duration}</span> </div>
             </div>
             <h3>About Company</h3>
             <div className={styles.job__main_about}>
              {jobData?.aboutCompany}
             </div>
             <h3>About the job/internship</h3>
             <div className={styles.job__main_about}>
              {jobData?.aboutJob}
             </div>
             <h3>Skills &#40;s&#x29; required </h3>
             <div className={styles.job__skills}>
           {  jobData?.skills.map((item)=>{
             return <span key={item} className={styles.job__main_skill}>{item}</span>
           })
            }
             </div>
             <h3>Additonal Information</h3>
             <div className={styles.job__main_about}>
            {jobData?.information}
             </div>
             </div>

           </div>
           </div>

  )
}

export default JobDetails