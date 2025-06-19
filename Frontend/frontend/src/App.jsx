import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Singup from "./Pages/Singup";
import SignIn from "./Pages/SignIn";
import { ToastContainer } from "react-toastify";
import { userDataContext } from "./Context/userContext";
function App() {
  let { userData } = useContext(userDataContext);
  return (
    <Routes>
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to="/signin" />}
      />
      <Route
        path="/signup"
        element={userData ? <Navigate to="/ " /> : <Singup />}
      />
      <Route
        path="/signin"
        element={userData ? <Navigate to="/" /> : <SignIn />}
      />
    </Routes>
  );
}

export default App;
