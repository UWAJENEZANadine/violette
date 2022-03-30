import React from "react";
import Header from "./header";
import "./HomeLayout.css"

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="Layout-container">
        <div style={{ minheight: "250vh" }}>{children}</div>
        
      </div>
    </>
  );
};

export default HomeLayout;
