import React from "react";
import "./Profile.css";
import Navbar from "../Navbartop/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import Footer from "../Footer/Footer";
const Profile = () => {
  return (
    <>
      <Navbar />
      <section className="profile">
        <h3>بيانات الحساب</h3>
        <div className="profile_container">
          <div className="profile_list">
            <div className="profile_item">
              <FontAwesomeIcon icon={faCartShopping} />
              <p>الطلبات</p>
            </div>
            <div className="profile_item">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>العنوان</p>
            </div>
            <div className="profile_item">
              <FontAwesomeIcon icon={faUser} />
              <p>الحساب</p>
            </div>

            <div className="profile_item">
              <FontAwesomeIcon icon={faHeart} />
              <p>قائمة المفضلة</p>
            </div>
            <div className="profile_item">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <p>تسجيل الخروج</p>
            </div>
            <div className="profile_item">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <p>تسجيل الخروج</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
