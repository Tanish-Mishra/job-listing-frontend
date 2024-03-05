import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJob } from "../../apis/job";
import { DEFAULT_SKILLS } from "../../utils/constants";
import styles from "./AddJob.module.css";

const AddJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    title: "",
    description: "",
    logoUrl: "",
    salary: "",
    location: "",
    duration: "",
    locationType: "",
    skills: [],
    aboutCompany: "",
    information: "",
    aboutJob: "",
  });

  const handleFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const createJobData = async () => {
    const response = await createJob({ ...formData });
    console.log(response);
  };

  const addSkill = (event) => {
    const skill = event.target.value;
    const actualSkills = formData.skills;
    const updatedSkill = [...formData.skills, skill];
    const filteredSkill = actualSkills.filter((element) => element == skill);
    if (!filteredSkill.length) {
      setFormData({ ...formData, skills: updatedSkill });
    }
  };
  const removeSkill = (skill) => {
    const actualSkills = formData.skills;
    const filteredSkill = actualSkills.filter((element) => element !== skill);
    console.log(filteredSkill);
    setFormData({ ...formData, skills: filteredSkill });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createJobData();
  };

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
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div className={styles.job__fields}>
          <span>Add logo URL</span>
          <input
            type="text"
            placeholder="Enter the link"
            name="logoUrl"
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div className={styles.job__fields}>
          <span>Job Position</span>
          <input
            type="text"
            placeholder="Enter Job Position"
            name="title"
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div className={styles.job__fields}>
          <span>Description</span>
          <input
            type="text"
            placeholder="Enter Job Description"
            name="description"
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div className={styles.job__fields}>
          <span>Monthly Salary</span>
          <input
            type="text"
            placeholder="Enter amount in rupees"
            name="salary"
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div className={styles.job__fields}>
          <span>Remote/Office</span>
          {/* <input type="text" placeholder="Enter your company name here" /> */}
          <select
            name="locationType"
            onChange={(event) => {
              handleFormData(event);
            }}
          >
            <option value="remote">Remote</option>
            <option value="office">Office</option>
          </select>
        </div>
        <div className={styles.job__fields}>
          <span>Location</span>
          <input
            type="text"
            placeholder="Enter Location"
            name="location"
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div
          className={`${styles.job__fields} ${styles.job__description_input}`}
        >
          <span>About Job/Internship</span>
          <textarea
            placeholder="Type about the job/internship"
            name="aboutJob"
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div
          className={`${styles.job__fields} ${styles.job__description_input}`}
        >
          <span>About Company</span>
          <textarea
            placeholder="Type about your company"
            name="aboutCompany"
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div className={styles.job__fields}>
          <span>Skills Required</span>
          <select
            name="skills"
            onChange={(event) => {
              addSkill(event);
            }}
          >
            <option>Select</option>
            {DEFAULT_SKILLS.map((element) => (
              <option value={element}>{element}</option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          {formData?.skills.map((element) => {
            return (
              <>
                <div className={styles.job__skills_remove}>
                  <span>{element}</span>
                  <button
                    onClick={() => {
                      removeSkill(element);
                    }}
                  >
                    X
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.job__fields}>
          <span>Information</span>
          <input
            type="text"
            placeholder="Enter the additional information"
            name="information"
            onChange={(event) => {
              handleFormData(event);
            }}
          />
        </div>
        <div className={styles.job__buttons}>
          <button
            className={styles.job__btn_cancel}
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
          <button
            className={styles.job__btn_add}
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            + Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
