import React from "react";
import "./transport.css";
import Navbar from "../Navbartop/Navbar";
import Footer from "../Footer/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="transport">
        <h2>سياسة الشحن</h2>
        <div className="transport_container"></div>
      </div>
      <Footer />
    </>
  );
};

export default page;
