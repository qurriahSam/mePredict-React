/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { signup } from "./firebase";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

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
        } catch (error) {
          alert(error);
        }
      };
      sendCredentials();
    } else {
      alert("passwords do not match");
    }
  };

  return (
    <div className="text-white">
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
              className="mb-4 text-[#fff]"
              value={credentials.email}
              onChange={handleCredentials}
            />
          </div>
          <div className="pb-5">
            <Typography>Password:</Typography>
            <Input
              name="password"
              type="password"
              className="mb-4 text-[#fff]"
              value={credentials.password}
              onChange={handleCredentials}
            />
          </div>
          <div className="pb-5">
            <Typography>Confirm Password:</Typography>
            <Input
              name="confirmPassword"
              type="password"
              className="mb-4 text-[#fff]"
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
