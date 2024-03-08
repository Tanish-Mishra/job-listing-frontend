import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { DEFAULT_SKILLS } from "../../utils/constants";

import Profile from "/assets/images/profile.png";
import CompanyLogo from "/assets/icons/company.png";
import Paisa from "/assets/icons/paisa.png";
import India from "/assets/icons/india.png";
import Group from "/assets/icons/group.png";
const Home = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();
  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
  }, []);
  const removeToken = () => {
    const tokenValue = "";
    setToken(tokenValue);
    localStorage.removeItem("token");
  };
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
            <span className={styles.header__recruiter}>Hello! Recruiter </span>
            <div className={styles.header__img}>
              <img
                src={Profile}
                alt="error"
                height="50px"
                width="50px"
                style={{}}
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
              <button className={styles.home__applyfilter}>Apply Filter</button>
              {token ? <button className={styles.home__applyfilter}>+ Add Job</button> : <></> }
              <span>Clear</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.home__cards_cont}>
        {/* card start  */} 
        <div className={styles.cards}>
          <div className={styles.cards__details_cont}>
            <img src={CompanyLogo} alt="error" height="50px" width="50px" />
            <div className={styles.cards__details}>
              <span className={styles.cards__job_tile}>Job Title</span>
              <div className={styles.cards__jobdetail}>
                <span className={styles.cards_number_details}>
                  <img src={Group} alt="error" /> 11-50
                </span>
                <span className={styles.cards_number_details}>
                  <img src={Paisa} alt="error" /> 50000
                </span>
                <span className={styles.cards_number_details}>
                  <img src={India} alt="error" height="30px" width="30px" />{" "}
                  Delhi
                </span>
              </div>
              <div className={styles.cards__location}>
                <span>Remote</span>
                <span>Full Time</span>
              </div>
            </div>
          </div>
          <div className={styles.cards__filters}>
            <div className={styles.cards__filters_cont}>
              <div className={styles.cards__filters_card}>fdafa</div>
              <div className={styles.cards__filters_card}>fdafa</div>
              <div className={styles.cards__filters_card}>fdafa</div>
              <div className={styles.cards__filters_card}>fdafa</div>
            </div>

            <div className={styles.cards__btncont}>
              {token ? <button className={styles.home__applyfilter}>Edit Job</button> : <></>}
              <button className={styles.home__applyfilter}>View Details</button>
            </div>
          </div>
        </div>
        {/* card end  */}
      </div>
    </div>
  );
};

export default Home;
