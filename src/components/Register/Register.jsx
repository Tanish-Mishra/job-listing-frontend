import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { register } from "../../apis/auth";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import errorHandler from "../../utils/errorHandler";
const Register = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const createUser = async(name,email,password) => {
         const response = await register(name,email,password)
         if(response.status==201) {
           navigate('/login')
         }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
        if(!formData.name || !formData.email || !formData.password) {
             errorHandler("Empty Fields!")
        } else {
        createUser(formData.name,formData.email,formData.password)
        }
  }
  return (
    <div className={styles.register}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.register__container}>
        <h3 className={styles.register__heading}>Create an Account</h3>
        <p>Your Personal Job finder</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />

        <div className={styles.register__policy}>
          By creating an account, I agree to our terms of use and privacy policy
        </div>
        <button className={styles.register__submitbtn} onClick={(event)=>{
          handleSubmit(event)
        }}>Create Account</button>
        <p className={styles.register__text}>
          Already have an account?{" "}
          <Link to="/login" className={styles.register__navigate}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
