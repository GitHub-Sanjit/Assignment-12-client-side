import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import img3 from "../../assets/404/404-pages.jpg";

const NotFoundPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div class="container mx-auto px-4 mt-6 h-4/5 ">
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default NotFoundPage;
