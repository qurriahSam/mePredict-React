import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./firebase";

const SignIn = () => {
  const [logins, setLogins] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleLogins = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setLogins({ ...logins, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = logins;

    const sendCredentials = async () => {
      try {
        await login(email, password);
        navigate("/");
      } catch (error) {
        alert(error);
      }
    };
    sendCredentials();
  };

  return (
    <div className="text-white">
      <Typography variant="h2" className="text-center pt-12">
        Sign In
      </Typography>
      <div className="mt-8 w-96 mx-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="pb-5">
            <Typography>Email:</Typography>
            <Input
              name="email"
              type="email"
              className="mb-4 text-[#fff]"
              value={logins.email}
              onChange={handleLogins}
            />
          </div>
          <div className="pb-5">
            <Typography>Password:</Typography>
            <Input
              name="password"
              type="password"
              className="mb-4 text-[#fff]"
              value={logins.password}
              onChange={handleLogins}
            />
          </div>
          <div className="grid">
            <Button ripple={true} type="submit" className="bg-[#44ff00] px-14 place-self-center">
              Sign In
            </Button>
          </div>

          <Typography className="pt-6">
            Dont have an account?{" "}
            <Link to="/signup">
              <span className="text-[#5e6eff]">Sign Up</span>
            </Link>{" "}
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
