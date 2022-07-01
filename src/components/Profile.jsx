/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import image from "../assets/groot.jpg";
import UserPredictions from "./UserPredictions";
import { Typography } from "@material-tailwind/react";
import { useAuth } from "./firebase";

const Profile = () => {
  const [predictions, setPredictions] = useState([]);
  const currentUser = useAuth();
  let logged = "";

  if (currentUser) {
    logged = currentUser.email;
    console.log(logged);
  }
 


  useEffect(() => {   
    console.log(logged);
    const getPredictions = async () => {
      try {
        const response = await fetch(`http://localhost:9292/profile/${logged}`);
        const  gamePredictions = await response.json();
        console.log(gamePredictions);
      } catch (error) {
        console.log("predictions fetch error", error);
      }
    };
    getPredictions(); 
  },[]);

  return (
    <div className="pt-40 container mx-auto">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Name:</td>
                  <td>Malcolm Lockyer</td>
                  <td>l</td>
                </tr>
                <tr>
                  <td className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Email:</td>
                  <td>The Eagles</td>
                </tr>
                <tr>
                  <td className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">About:</td>
                  <td>Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto mt-6">
        <Typography className="text-[#44ff00]" >My Predictions:</Typography>
        <UserPredictions />
      </div>
    </div>
    
    
  );
};

export default Profile;