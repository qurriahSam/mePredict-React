import React from "react";
import image from "../assets/self.JPG";

const Profile = () => {
  return (
    <div className="pt-40">
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
    </div>
  );
};

export default Profile;