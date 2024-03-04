import React from "react";
import styles from "./AddJob.module.css";
const AddJob = () => {
  return (
    <div className={styles.job}>
      <h2 className={styles.job__header}>Add Job Description</h2>
      <div className={styles.job__body}>
        <div className={styles.job__fields}>
          <span>Company Name</span>
          <input
            type="text"
            placeholder="Enter your company name here"
            name="companyName"
          />
        </div>
        <div className={styles.job__fields}>
          <span>Add logo URL</span>
          <input type="text" placeholder="Enter the link" name="logoUrl" />
        </div>
        <div className={styles.job__fields}>
          <span>Job Position</span>
          <input type="text" placeholder="Enter Job Position" name="title" />
        </div>
        <div className={styles.job__fields}>
          <span>Monthly Salary</span>
          <input
            type="text"
            placeholder="Enter amount in rupees"
            name="salary"
          />
        </div>
        <div className={styles.job__fields}>
          <span>Remote/Office</span>
          {/* <input type="text" placeholder="Enter your company name here" /> */}
          <select name="locationType">
            <option value="remote">Remote</option>
            <option value="office">Office</option>
          </select>
        </div>
        <div className={styles.job__fields}>
          <span>Location</span>
          <input type="text" placeholder="Enter Location" name="location" />
        </div>
        <div
          className={`${styles.job__fields} ${styles.job__description_input}`}
        >
          <span>Duration</span>
          <textarea placeholder="Type the job description" name="duration" />
        </div>
        <div
          className={`${styles.job__fields} ${styles.job__description_input}`}
        >
          <span>About Company</span>
          <textarea placeholder="Type about your company" name="aboutCompany" />
        </div>
        <div className={styles.job__fields}>
          <span>Skills Required</span>
          <select name="skills">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
            <option value="react">REACT</option>
          </select>
        </div>
        <div className={styles.job__fields}>
          <span>Information</span>
          <input
            type="text"
            placeholder="Enter the additional information"
            name="information"
          />
        </div>
        <div className={styles.job__buttons}>
          <button className={styles.job__btn_cancel}>
            Cancel
          </button>
          <button
            className={styles.job__btn_add}
          >
            + Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
