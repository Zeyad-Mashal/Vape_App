import React from "react";
import "./usage.css";
import Navbar from "../Navbartop/Navbar";
import Footer from "../Footer/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="usage">
        <h2>سياسة الاستخدمات والخصوصة</h2>
        <div className="usage_container"></div>
      </div>
      <Footer />
    </>
  );
};

export default page;
