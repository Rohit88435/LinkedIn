import React, { useContext, useState } from "react";
import inimg from "../assets/in.png";
import { IoSearch } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import profile from "../assets/profile.png";
import { userDataContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../Context/AuthContext";
import axios from "axios";
function Nav() {
  let [activeSearch, setActiveSearch] = useState(false);
  let { userData, setUserData } = useContext(userDataContext);
  let naviagte = useNavigate();
  let { serverUrl } = useContext(authDataContext);

  const handleSignOut = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      setUserData(null);
      naviagte("/signin");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[70px] 2xl:h-[80px] bg-white shadow-lg fixed top-0 flex items-center lg:justify-around justify-between ">
      <div className="flex justify-center items-center gap-3 pl-[10px] lg:pl-[0]">
        <img src={inimg} alt="" className="w-[50px]" />
        {!activeSearch && (
          <div>
            <IoSearch
              className="h-[22px] text-gray-700 w-[22px] lg:hidden"
              onClick={() => {
                setActiveSearch(true);
              }}
            />
          </div>
        )}

        <form
          action=""
          className={` ${
            !activeSearch ? "lg:flex " : "flex"
          } lg:w-[350px]  w-[210px] h-[40px] lg:gap-[10px] gap-[5px] px-[10px] py-[5px] rounded-md items-center bg-[#f3f2ec] ${
            !activeSearch ? "hidden" : ""
          } `}
        >
          <div className="">
            <IoSearch className="h-[22px] text-gray-700 w-[22px]" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-[80%] h-full bg-transparent outline-none "
          />
        </form>
      </div>

      <div className="flex justify-around items-center gap-[30px] pr-[10px] lg:pr-[0] relative">
        <div className="w-[300px] h-[300px] bg-white shadow-lg absolute top-[68px] rounded-lg flex flex-col items-center p-[20px] pt-[10px] gap-[10px]">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
            <img src={profile} alt="" className="w-full h-full" />
          </div>
          <div className="font-semibold text-gray-700 text-[18px]">
            {`${userData.firstName} ${userData.lastName}`}
          </div>
          <button className="w-full h-[40px] border-2 border-b-cyan-500 outline-none  rounded-full text-cyan-500">
            View Profile
          </button>
          <div className="w-full h-[1px] bg-gray-500"></div>
          <div className="flex justify-start w-full gap-[5px] px-[10px] items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <FaUserFriends className="h-[20px] w-[20px]" />
            <div className="font-semibold">Networks</div>
          </div>

          <div className="flex justify-start w-full gap-[5px] px-[10px] items-center  text-gray-600 hover:text-gray-900 cursor-pointer ">
            <IoNotifications className="h-[20px] w-[20px]" />
            <div className="font-semibold">Notification</div>
          </div>
          <div className="w-full">
            <button
              className="w-[35%] h-[35px] border-2 bg-cyan-500 outline-none  rounded-full  text-white cursor-pointer hover:bg-cyan-600"
              onClick={handleSignOut}
            >
              Signout
            </button>
          </div>
        </div>
        <div className="lg:flex justify-center flex-col text-gray-600 hover:text-gray-900 cursor-pointer hidden items-center ">
          <IoMdHome className="h-[25px] w-[25px]" />
          <div className="font-semibold">Home</div>
        </div>
        <div className="md:flex justify-center flex-col items-center text-gray-600 hover:text-gray-900 hidden cursor-pointer">
          <FaUserFriends className="h-[25px]  w-[25px]" />
          <div className="font-semibold">Networks</div>
        </div>
        <div className="md:flex justify-center flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer hidden">
          <IoNotifications className="h-[25px] w-[25px]" />
          <div className="font-semibold">Notification</div>
        </div>
        <div className="flex justify-center flex-col items-center ">
          <img src={profile} alt="" className="w-[60px] h-[60px]" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
