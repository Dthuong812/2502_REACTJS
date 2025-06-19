import React from "react";
import { Outlet } from "react-router-dom";
import SideBarComponent from "./components/SideBarComponent";

const App = () => {
  return (
    <div className="flex h-screen">
      <SideBarComponent />
      <Outlet></Outlet>
    </div>
  );
};

export default App;
