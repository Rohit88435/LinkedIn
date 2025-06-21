import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const userDataContext = createContext();
function UserContext({ children }) {
  let [userData, setUserData] = useState(null);
  let { serverUrl } = useContext(authDataContext);
  let [edit, setEdit] = useState(false);
  const getCurrentser = async () => {
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

  useEffect(() => {
    getCurrentser();
  }, []);

  let value = {
    userData,
    setUserData,
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
