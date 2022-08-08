/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "./firebase";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleCredentials = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = credentials;
    if (password === confirmPassword) {
      const sendCredentials = async () => {
        try {
          await signup(email, password);
          navigate("/");
        } catch (error) {
          alert(error);
        }
      };
      sendCredentials();
      signup_to_db(email);
    } else {
      alert("passwords do not match");
    }
  };

  const signup_to_db = async (email) => {
    try {
      const url = "https://mprdct.herokuapp.com/mepredict/newuser";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const user = await response.json();
      console.log("created in db", user);
    } catch (error) {
      console.log("signup error", error);
    }
  };

  return (
    <div className="text-white pt-12 dark:text-black">
      <Typography variant="h2" className="text-center pt-12">
        Sign Up
      </Typography>
      <div className="mt-8 w-96 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="pb-5">
            <Typography>Email:</Typography>
            <Input
              name="email"
              type="email"
              className="mb-4 text-[#fff] dark:text-black"
              value={credentials.email}
              onChange={handleCredentials}
            />
          </div>
          <div className="pb-5">
            <Typography>Password:</Typography>
            <Input
              name="password"
              type="password"
              className="mb-4 text-[#fff] dark:text-black"
              value={credentials.password}
              onChange={handleCredentials}
            />
          </div>
          <div className="pb-5">
            <Typography>Confirm Password:</Typography>
            <Input
              name="confirmPassword"
              type="password"
              className="mb-4 text-[#fff] dark:text-black"
              value={credentials.confirmPassword}
              onChange={handleCredentials}
            />
          </div>
          <div className="grid">
            <Button ripple={true} type="submit" className="bg-[#44ff00] px-14 place-self-center">
              Submit
            </Button>
          </div>
        </form>
        <Typography className="pt-6">
          Already have an account?{" "}
          <Link to="/signin">
            <span className="text-[#5e6eff]">Sign In</span>
          </Link>{" "}
        </Typography>
      </div>
    </div>
  );
};

export default SignUp;
