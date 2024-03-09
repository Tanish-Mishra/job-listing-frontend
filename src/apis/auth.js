import React from "react";
import axios from "axios";
import errorHandler from "../utils/errorHandler";

const BACKENDURI = import.meta.env.VITE_BACKEND_URI;
export const checkLogin = async (name, email, password) => {
  try {
    const reqUrl = `${BACKENDURI}/auth/login`;
    axios.defaults.withCredentials = true;
    const response = await axios.post(reqUrl, {
      name,
      email,
      password,
    });
    return response;
  } catch (error) {
    errorHandler("Check Your Password/Username!");
  }
};

export const register = async (name, email, password) => {
  try {
    const reqUrl = `${BACKENDURI}/auth/register`;
    const response = await axios.post(reqUrl, { name, email, password });
    return response;
  } catch (error) {
    errorHandler("Api Failed!");
  }
};
