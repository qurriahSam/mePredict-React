import React from "react";
import { Input } from "@material-tailwind/react";
import Games from "./Games";

const Home = () => {
  return (
    <main className="h-screen bg-[#000C1D]">
      <div className="py-6 w-80 mx-auto">
        <Input variant="standard" label="Search" />
      </div>
      <Games />
    </main>
  );
};

export default Home;
