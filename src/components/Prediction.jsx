import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-tailwind/react";

const Prediction = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => setLike(!like);

  return (
    <>
      <div className="border-[#44ff00] border-2  p-2 flex justify-around">
        <div>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={like ? "text-[#44ff00]" : "text-white"}
            onClick={handleLike}
          />
          <span className="text-white pl-2">2</span>
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
