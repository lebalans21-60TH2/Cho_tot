import React from "react";
import WrapperHeader from "./WrapperHeader/WrapperHeader";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="w-full 800px:flex 800px:flex-col 800px:relative 800px:z-50">
      <WrapperHeader />
      <Navbar />
    </div>
  );
};

export default Header;
