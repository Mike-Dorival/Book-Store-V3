import React from "react";
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import Register from "./components/MyAccount/Register/Register";

const routes = {
  "/": () => <Home />,
  "/myAccount": () => <MyAccount />,
  "/register": () => <Register />
};

export default routes;
