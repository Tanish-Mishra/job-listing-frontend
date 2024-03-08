import React from "react";
import axios from "axios";
import errorHandler from "../utils/errorHandler";
const BACKENDURI = import.meta.env.VITE_BACKEND_URI;
export const fetchJobById = async (jobId) => {
  try {
    const reqUrl = `${BACKENDURI}/jobs/details/${jobId}`;
    const response = await axios.get(reqUrl);
    return response.data;
  } catch (error) {
    errorHandler("Incorrect Job Id!");
  }
};

export const createJob = async ({
  companyName,
  title,
  description,
  logoUrl,
  salary,
  location,
  duration,
  locationType,
  aboutCompany,
  information,
  skills,
  aboutJob,
}) => {
  try {
    const reqUrl = `${BACKENDURI}/jobs/create`;
    const token = JSON.parse(localStorage.getItem("token"));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(reqUrl, {
      companyName,
      title,
      description,
      logoUrl,
      salary,
      location,
      duration,
      locationType,
      aboutCompany,
      information,
      skills,
      aboutJob,
    });
    console.log(response);
  } catch (error) {
    errorHandler("Error While Creating Job!");
  }
};
