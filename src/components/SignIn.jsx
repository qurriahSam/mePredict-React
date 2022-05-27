import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="text-white">
      <Typography variant="h2" className="text-center pt-12">
        Sign In
      </Typography>
      <div className="mt-8 w-96 mx-auto p-10">
        <form>
          <div className="pb-5">
            <Typography>Email:</Typography>
            <Input label="email" type="email" className="mb-4 text-[#fff]" />
          </div>
          <div className="pb-5">
            <Typography>Password:</Typography>
            <Input label="password" type="password" className="mb-4 text-[#fff]" />
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
