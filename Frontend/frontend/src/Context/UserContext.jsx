import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const userDataContext = createContext();
function UserContext({ children }) {
  let [userData, setUserData] = useState(null);
  let [postData, setPostData] = useState(null);
  let { serverUrl } = useContext(authDataContext);
  let [edit, setEdit] = useState(false);
  const getCurrentuser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/currentuser", {
        withCredentials: true,
      });

      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.log(error);

      console.log("user contextn error");
    }
  };

  const getPost = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/post/getpost", {
        withCredentials: true,
      });
      setPostData(result.data);
      console.log(result);
    } catch (error) {
      setPostData(null);
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentuser();
    getPost();
  }, []);

  let value = {
    userData,
    setUserData,
    postData,
    setPostData,
    edit,
    setEdit,
  };
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  );
}

export default UserContext;
