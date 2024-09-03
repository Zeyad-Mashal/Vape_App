"use client";
import React, { useState, useEffect } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faX } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
import addRatingApi from "@/src/app/[locale]/api/rating/addRatingApi";
import getRatingApi from "@/src/app/[locale]/api/rating/getRatingApi";
const Reviwes = () => {
  useEffect(() => {
    getAllRatingsApi();
  }, []);
  const t = useTranslations("sectionFour");
  const [openModel, setOpenModel] = useState(false);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allRatings, setAllRatings] = useState([]);
  const countStars = (num) => {
    const starsArr = document.querySelectorAll(".rating");
    starsArr.forEach((item) => {
      item.style.color = "gray";
    });
    for (let i = 0; i < num; i++) {
      starsArr[i].style.color = "gold";
    }
    setRating(num);
  };
  const addRating = () => {
    const data = {
      rating,
      name,
      comment,
    };
    addRatingApi(setLoading, setError, data);
  };
  const getAllRatingsApi = () => {
    getRatingApi(setLoading, setError, setAllRatings);
  };
  return (
    <section className="review">
      <div className="review_container">
        <h2>{t("title")}</h2>
        <div className="review_list">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {loading
              ? "Loading..."
              : allRatings.map((item) => {
                  return (
                    <SwiperSlide key={item._id}>
                      <div className="review_item">
                        <h3 className="review_name">{item.name}</h3>
                        <div className="reviwes_stars">
                          <FontAwesomeIcon
                            icon={faStar}
                            width={20}
                            className={"activeStar"}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            width={20}
                            className={item.rating >= 2 ? "activeStar" : null}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            width={20}
                            className={item.rating >= 3 ? "activeStar" : null}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            width={20}
                            className={item.rating >= 4 ? "activeStar" : null}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            width={20}
                            className={item.rating >= 5 ? "activeStar" : null}
                          />
                        </div>
                        <p>{item.comment}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
      </div>
      <button className="reviwes_btn" onClick={() => setOpenModel(true)}>
        شاركنا رأيك
      </button>
      {openModel ? (
        <div className="reviwe_model">
          <h3>شاركنا برأيك</h3>
          <FontAwesomeIcon
            icon={faX}
            width={30}
            className="close_icon"
            onClick={() => setOpenModel(false)}
          />
          <div className="reviwe_model_content">
            <div className="stars">
              <FontAwesomeIcon
                icon={faStar}
                width={30}
                onClick={() => countStars(1)}
                className="rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                width={30}
                onClick={() => countStars(2)}
                className="rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                width={30}
                onClick={() => countStars(3)}
                className="rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                width={30}
                onClick={() => countStars(4)}
                className="rating"
              />
              <FontAwesomeIcon
                icon={faStar}
                width={30}
                onClick={() => countStars(5)}
                className="rating"
              />
            </div>
            <input
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="رسالتك لنا"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <p className="ratingChecked">تم استلام تقيمك شكرا لك</p>
            <button className="reviwes_btn" onClick={addRating}>
              {loading ? "Loading..." : "ارسال"}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Reviwes;
