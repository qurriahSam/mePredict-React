import React from "react";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const UserPredictions = () => {
  return (
    <>
      <div className=" max-w-lg mx-auto mt-3 px-6 py-2.5 bg-white border-2 border-indigo-600 hover:border-[#44ff00]">
        <div className="grid grid-cols-8">
          <div className="flex col-span-3 justify-end">
            <Typography className="font-medium pt-1 pr-2">home</Typography>
          
          </div>
          <Typography className="font-medium px-3 text-center"> - </Typography>
          <div className="flex col-span-3">
          
            <Typography className="font-medium pt-1 pl-2">away</Typography>
          </div>
          <FontAwesomeIcon icon={faXmark} className=" cursor-pointer hover:animate-pulse pt-2" />
        </div>
      </div>
      <div className=" max-w-lg mx-auto mt-3 px-6 py-2.5 bg-white border-2 border-indigo-600 hover:border-[#44ff00]">
        <div className="grid grid-cols-8">
          <div className="flex col-span-3 justify-end">
            <Typography className="font-medium pt-1 pr-2">home</Typography>
          
          </div>
          <Typography className="font-medium px-3 text-center"> - </Typography>
          <div className="flex col-span-3">
          
            <Typography className="font-medium pt-1 pl-2">away</Typography>
          </div>
          <FontAwesomeIcon icon={faXmark} className=" cursor-pointer hover:animate-pulse pt-2" />
        </div>
      </div>
    </>
  );
};

export default UserPredictions;