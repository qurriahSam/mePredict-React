/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-tailwind/react";

const Prediction = ({ score: { home, likes, away } }) => {
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setLike(!like);
    like ? setLikesCount((likes) => likes - 1) : setLikesCount((likes) => likes + 1);
  };

  return (
    <>
      <div className="border-[#44ff00] border-2  p-2 flex justify-around">
        <div>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={like ? "text-[#44ff00]" : "text-white"}
            onClick={handleLike}
          />
          <span className="text-white pl-2">{likesCount}</span>
        </div>
        <Typography color="white">
          <span>{home}</span>
          <span>-</span>
          <span>{away}</span>
        </Typography>
      </div>
    </>
  );
};

export default Prediction;
