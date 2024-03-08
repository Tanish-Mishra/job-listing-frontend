import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { DEFAULT_SKILLS } from "../../utils/constants";
import { useLocation } from "react-router-dom";
import { getAllJob } from "../../apis/job";

import Profile from "/assets/images/profile.png";
import CompanyLogo from "/assets/icons/company.png";
import Paisa from "/assets/icons/paisa.png";
import India from "/assets/icons/india.png";
import Group from "/assets/icons/group.png";
const Home = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();
  const [allJobs, setAllJobs] = useState([]);
  const {state} = useLocation()
  const [title, setTitle] = useState("")
  const [skills, setSkills] = useState([])
 
  const removeToken = () => {
    const tokenValue = "";
    setToken(tokenValue);
    localStorage.removeItem("token");
  };

  const fetchAllJob = async() => {
       const response = await getAllJob(title);
       setAllJobs(response?.data)
  }

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
    fetchAllJob()
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.header__name}>Jobfinder</div>
        {!token ? (
          <div className={styles.header__buttons}>
            <button
              className={styles.header__btn}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              className={`${styles.header__btn} ${styles.header__register}`}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </div>
        ) : (
          <div className={styles.header__recruiter_container}>
            <button
              className={styles.header__btn}
              onClick={() => {
                removeToken();
              }}
            >
              Logout
            </button>
            <span className={styles.header__recruiter}>Hello! {state?.name} </span>
            <div className={styles.header__img}>
              <img
                src={Profile}
                alt="error"
                height="50px"
                width="50px"
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.home__body}>
        <div className={styles.home__search_container}>
          <input
            type="text"
            name="title"
            className={styles.home__searchbar}
            placeholder="Type any job title"
            onChange={(event)=>{
              setTitle(event.target.value)
            }}
          />
          <div className={styles.home__search_skills}>
            <div className={styles.home__skills_filter}>
              <select name="lol" className={styles.home__select_skill}>
                <option value="Select">Select</option>
                {DEFAULT_SKILLS.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>

              <div className={styles.home__filters}>
                <span
                  className={styles.home__name}
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Filter
                </span>
                <button className={styles.home__cross_btn}>X</button>
              </div>
            </div>
            <div className={styles.home__applyfilter_cont}>
              <button className={styles.home__applyfilter} onClick={()=>{
                fetchAllJob() 
              }}>Apply Filter</button>
              {token ? <button className={styles.home__applyfilter}>+ Add Job</button> : <></> }
              <span>Clear</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.home__cards_cont}>
        { allJobs.data?.map((job)=>(
        <div className={styles.cards}>
          <div className={styles.cards__details_cont}>
            <img src={job?.logoUrl} alt="error" height="50px" width="50px" />
            <div className={styles.cards__details}>
              <span className={styles.cards__job_tile}>{job?.title}</span>
              <div className={styles.cards__jobdetail}>
                <span className={styles.cards_number_details}>
                  <img src={Group} alt="error" /> 11-50
                </span>
                <span className={styles.cards_number_details}>
                  <img src={Paisa} alt="error" /> {job?.salary}
                </span>
                <span className={styles.cards_number_details}>
                  <img src={India} alt="error" height="30px" width="30px" />{" "}
                  {job?.location}
                </span>
              </div>
              <div className={styles.cards__location}>
                <span>{job?.duration}</span>
                <span>{job?.locationType}</span>
              </div>
            </div>
          </div>
          <div className={styles.cards__filters}>
              
            <div className={styles.cards__filters_cont}>
              {job?.skills.map((skill)=>(
              <div className={styles.cards__filters_card}>{skill}</div>
              ))}
            </div>

            <div className={styles.cards__btncont}>
              {token ? <button className={styles.home__applyfilter} onClick={()=>{
                    
                        navigate("/add-job", {
                          state: {
                            jobId: job?._id,
                            jobDetails: job,
                            edit: true,
                          },
                        })
                      }}  >Edit Job</button> : <></>}
              <button className={styles.home__applyfilter} onClick={()=>{
                   navigate(`/job-details/${job?._id}`)
              }}>View Details</button>
            </div>
          </div>
        </div>
             ))}  
      </div>
    </div>
  );
};

export default Home;
