/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-tailwind/react";
import { useAuth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Prediction = ({ score: { home, likes, away, id } }) => {

  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const currentUser = useAuth();
  let navigate = useNavigate();
  let logged = "";
  
  if (currentUser) {
    logged = currentUser.email;
  }
  console.log(logged);


  const handleLike = () => {
    if (currentUser) {
      logged = currentUser.email;
      setLike(!like);
      like ?  deleteLike() : addLike();
    } else {
      navigate("/signin");
    }
  };

  const addLike = async () => {
    try {
      const response = await fetch(`https://mprdct.herokuapp.com/prediction/like/${id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({user_email: logged})
      });
      const  likeNew = await response.json();
      setLikesCount(() => [...likesCount, likeNew]);
      console.log(likeNew);
      
    } catch (error) {
      console.log("like post error", error);
    }
  };

  const deleteLike = async () => {
    try {
      const response = await fetch(`https://mprdct.herokuapp.com/prediction/like/${id}/${logged}`,{
        method: "DELETE"
      });
      const  likeDelete = await response.json();
      setLikesCount(() => likesCount.filter((like) => like.user_id != likeDelete.user_id)); 
    } catch (error) {
      console.log("like delete error", error);
    }
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
          <span className="text-white pl-2">{likesCount.length}</span>
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
