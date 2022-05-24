import React from "react";
import { Input } from "@material-tailwind/react";

const Home = () => {
  return (
    <main className="h-screen bg-[#000C1D]">
      <div className="py-6 w-80 mx-auto">
        <Input variant="standard" label="Search" />
      </div>
    </main>
  );
};

export default Home;
