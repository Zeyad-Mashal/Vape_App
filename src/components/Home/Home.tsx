"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbartop/Navbar";
import NavbarMenu from "../Navbarmenu/NavbarMenu";
import Hero from "../Hero/Hero";
import Section1 from "../section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Footer from "../Footer/Footer";
import Reviews from "../reviwes/Reviwes";
import Image from "next/image";
import "./Home.css";
import { useLocale } from "next-intl";
import { type Locale } from "@/src/lib/locales";
const Home = () => {
  const locale = useLocale() as Locale
  const [modelLoading, setModelLoading] = useState(false);
  const lang = locale

  useEffect(() => {
    setModelLoading(true);
    setTimeout(() => {
      setModelLoading(false);
    }, 2800);
  }, []);
  window.localStorage.setItem("translation", lang)
  return (
    <div>
      {
        modelLoading ? <div className="model">
          <p>Vape App</p>
        </div>
          : null
      }


      <Navbar />
      <NavbarMenu />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Reviews /> */}
      <Footer />

    </div>
  );
};

export default Home;
