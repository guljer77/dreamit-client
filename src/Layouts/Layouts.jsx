import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function Layouts() {
  return (
    <>
      <Header />
      <div className="pt-20 pb-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layouts;
