import React from "react";
import { Typography, Input } from "@material-tailwind/react";

const SignUp = () => {
  return (
    <div className="text-white">
      <Typography variant="h2" className="text-center pt-12">
        Sign Up
      </Typography>
      <div className="mt-8 w-96 mx-auto bg-indigo-500 p-10">
        <form>
          <Input label="Username" className="mb-4" />
          <Input label="Username" className="mb-4" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
