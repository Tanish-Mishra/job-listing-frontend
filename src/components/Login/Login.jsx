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
 const [isValid,setIsValid] = useState(true)
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
      navigate("/");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setError({
      name: "",
      email: "",
      password: "",
    })
  let valid = true;
 setIsValid(true)
    if (!formData.name.trim().length) {
      setError((prev) => {
        return {
          ...prev,
          name: "Name Field is Required !",
        };
      });
      setIsValid(false)
      valid = false

    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setError((prev) => {
        return {
          ...prev,
          name: "Name should contain only letters and spaces !",
        };
      });
      setIsValid(false)
      valid = false

    }
    if (!formData.email.trim().length) {
      setError((prev) => {
        return {
          ...prev,
          email: "Email Field is Required!",
        };
      });
      setIsValid(false)
      valid = false

    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError((prev) => {
        return {
          ...prev,
          email: "Email is not Valid!",
        };
      });
      setIsValid(false)
      valid = false

    }
    if (!formData.password.trim().length) {
      setError((prev) => {
        return {
          ...prev,
          password: "Password Field is Required!",
        };
      });
      setIsValid(false)
      valid = false

    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
      setError((prev) => {
        return {
          ...prev,
          password: "Password is not Valid!",
        };
      });
      setIsValid(false)
      valid = false

    }   
 if(valid){
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
          style={{
            border: `${error.name ? "2px solid red": "2px solid #C2C2C2"}`
          }}
        />
        <span className={styles.login__error}>{error.name}</span>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(event) => {
            onChangeHandler(event);
          }}
          style={{
            border: `${error.email ? "2px solid red": "2px solid #C2C2C2"}`
          }}
        />
        <span className={styles.login__error}>{error.email}</span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            onChangeHandler(event);
          }}
          style={{
            border: `${error.password ? "2px solid red": "2px solid #C2C2C2"}`
          }}
        />
        <span className={styles.login__error}>{error.password}</span>
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
