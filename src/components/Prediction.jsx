import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-tailwind/react";

const Prediction = () => {
  return (
    <>
      <div className="border-green-500 border-2  p-2 flex align-middle">
        <div>
          <FontAwesomeIcon icon={faThumbsUp} className="text-white" />
        </div>

        <Typography color="white">
          <span>1</span>
          <span>-</span>
          <span>3</span>
        </Typography>
      </div>
      <div className="border-green-500 border-2 p-2 flex space-x-5">
        <div className="grid grid-cols-2 gap-1">
          <FontAwesomeIcon icon={faThumbsUp} className="text-white pt-1" />
          <Typography as="span" color="white">
            2
          </Typography>
        </div>

        <Typography color="white">
          <span>1</span>
          <span>-</span>
          <span>3</span>
        </Typography>
      </div>
    </>
  );
};

export default Prediction;
