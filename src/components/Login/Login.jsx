import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {checkLogin} from "../../apis/auth";
import errorHandler from "../../utils/errorHandler";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error,setError] = useState({
    name: "",
    email: "",
    password: "",
  })

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const authLogin = async (name, email, password) => {
    const response = await checkLogin(name, email, password);
    if (response?.data?.name) {
      navigate("/register");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if ((!formData.name, !formData.email || !formData.password)) {
      errorHandler("Empty Fields!");
    } else {
      authLogin(formData.name, formData.email, formData.password);
    }
  };
  return (
    <div className={styles.login}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.login__container}>
        <h3 className={styles.login__heading}>Already have an account ?</h3>
        <p>Your Personal Job finder</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(event) => {
            onChangeHandler(event);
          }}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(event) => {
            onChangeHandler(event);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            onChangeHandler(event);
          }}
        />
        <button
          className={styles.login__submitbtn}
          onClick={(event) => {
            handleLogin(event);
          }}
        >
          Login
        </button>
        <p className={styles.login__text}>
          Don't have an account?{" "}
          <Link to="/register" className={styles.login__navigate}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
