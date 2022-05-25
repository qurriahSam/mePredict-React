import React from "react";
import { Input } from "@material-tailwind/react";
import Games from "./Games";

const Home = () => {
  // fetch games
  // create state to save fetched games
  // loop through sending data as props to games component
  return (
    <>
      <div className="py-6 w-80 mx-auto">
        <Input variant="standard" label="Search" className="text-white" />
      </div>
      <Games />
    </>
  );
};

export default Home;
