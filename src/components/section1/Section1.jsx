"use client";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section1.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import "./Section1.css";
import { useTranslations } from "next-intl";
import getBySection from "@/src/app/[locale]/api/topSale/getBySection";
import Link from "next/link";
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
const Section1 = () => {
  useEffect(() => {
    getAllProductsBySection();
  }, []);
  const { push } = useRouter();
  const t = useTranslations("sectionOne");
  const [bySection, setBySection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [error, setError] = useState("");
  const getAllProductsBySection = () => {
    getBySection(setLoading, setError, setBySection, "topSale");
  };
  const lang = window.localStorage.getItem("translation");
  const user_token = window.localStorage.getItem("user");
  const addToCart = (productId) => {
    if (user_token) {
      const data = {
        quantity: 1,
      };
      addToCartApi(setCartLoading, setError, productId, data);
    } else {
      push(`/${lang}/register`);
    }
  };
  const closeCartPopup = () => {
    document.querySelector(".cart_popop").style.display = "none";
  };
  return (
    <section className="section1">
      <div className="section1_container">
        <h2>{t("title")}</h2>
        <div className="section1_list">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {loading
              ? "loading..."
              : bySection?.map((item) => {
                  return (
                    <SwiperSlide key={item._id}>
                      <div className="section1_item">
                        <Link href={`/${lang}/details/${item._id}`}>
                          <Image
                            src={item?.images[0]}
                            width={200}
                            height={200}
                            alt="product image"
                          />
                        </Link>
                        <div className="item_content">
                          <span>النكهات سولت نيكوتين</span>
                          <h3>{item?.name}</h3>
                          <div className="price">
                            <p>{item?.price} ريال</p>
                            <div className="cart_btn">
                              <button
                                onClick={() => addToCart(item._id)}
                                className="cart_btn_button"
                              >
                                أضف الي السلة
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
          </Swiper>
          <div className="cart_popop_container">
            <div className="cart_popop">
              <FontAwesomeIcon icon={faX} onClick={closeCartPopup} />
              <h4>Vape App</h4>
              <h3>تمت الاضافة الي السلة</h3>
              <Link href={`${lang}/cart`}>عرض السلة</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section1_banner">
        <Image
          src="/images/5.jpg"
          width={1500}
          height={1500}
          alt="banner image"
        />
      </div>
    </section>
  );
};

export default Section1;
