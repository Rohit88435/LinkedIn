import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import profile from "../assets/profile.png";
import { FiPlus } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { userDataContext } from "../Context/userContext";
import { RiPencilFill } from "react-icons/ri";
import EditProfile from "../Components/EditProfile";

function Home() {
  let { userData, setUserData, edit, setEdit } = useContext(userDataContext);

  return (
    <div className="w-full min-h-[100vh] bg-[#f3f2ec] pt-[90px] flex justify-center items-start  gap-[15px] flex-col lg:flex-row">
      {edit && <EditProfile />}
      <Nav />
      <div className="lg:w-[25%] md:w-[25%] lg:min-h-[250px] p-[10px] bg-white shadow-xl ml-[20px] hidden lg:flex relative flex-col">
        <div className="w-[100%] h-[100px] bg-gray-500 rounded-md overflow-hidden flex justify-center cursor-pointer items-center">
          <img src={userData.coverImage || ""} alt="" className="w-full" />
          <IoCameraOutline className="absolute w-[25px] right-[20px] top-[15px] h-[25px] text-[#d7e0e3] cursor-pointer " />
        </div>
        <div className=" w-[50px] h-[50px] rounded-full top-[80px] left-[30px] absolute cursor-pointer overflow-hidden flex justify-center items-center ">
          <img
            src={userData.profileImage || profile}
            alt=""
            className="h-full"
          />
        </div>
        <div className="w-[20px] h-[20px] z-40 absolute top-[105px] rounded-full flex justify-center items-center left-[70px] bg-[#57d2ff] cursor-pointer">
          <FiPlus className=" text-white" />
        </div>

        <div className="mt-[25px] pl-[10px] font-semibold text-gray-700 text-[18px]">
          <div>{`${userData.firstName} ${userData.lastName}`}</div>
          <div className="font-semibold text-gray-500 text-[16px]">
            {userData.location}
          </div>
          <div className="font-semibold text-gray-700 text-[18px]">
            {userData.headline || ""}
          </div>
          <button
            className="w-full h-[40px] border-2 mt-[10px] border-b-cyan-500 outline-none  rounded-full cursor-pointer text-cyan-500 flex justify-center items-center gap-[5px]"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit Profile
            <RiPencilFill />
          </button>
        </div>
      </div>
      <div className="lg:w-[50%] w-[90%] h-[100vh] bg-white shadow-xl mx-[20px]"></div>
      <div className="lg:w-[25%] md:w-[25%] lg:min-h-[250px] bg-white shadow-xl mr-[10px] hiddien lg:flex md:flex "></div>
    </div>
  );
}

export default Home;
