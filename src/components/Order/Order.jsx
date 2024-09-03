"use client";
import React, { useState } from "react";
import Navbar from "@/src/components/Navbartop/Navbar";
import "./Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import createOrderApi from "@/src/app/[locale]/api/order/createOrderApi";
const Order = () => {
  const closeOrder = () => {
    document.querySelector(".order_created").style.display = "none";
  };
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({});
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [copoun, setCopoun] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const createOrder = () => {
    const orderData = {
      userName: name,
      userPhone: phone,
      couponCode: copoun ? copoun : undefined,
      city,
      address,
      paymentWay: "Cash on Delivery",
    };
    if (city == "" || address == "") {
      setError("يجب ملئ البيانات المطلوبة اولا");
    }
    createOrderApi(setloading, setError, setOrder, setUser, orderData);
  };
  return (
    <>
      <Navbar />
      <section className="order">
        <div className="order_container">
          <h2>أهلا بك في تفاصيل الطلب</h2>
          <p>يرجي ملئ البيانات لأستلام الطلب</p>
          <div className="order_content">
            <h3>بيانات الطلب</h3>
            <div className="order_input">
              <label htmlFor="city">الاسم:</label>
              <input
                type="text"
                name="city"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="order_input">
              <label htmlFor="city">رقم الجوال:</label>
              <input
                type="text"
                name="city"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="order_input">
              <label htmlFor="city">المنطقة:</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="order_input">
              <label htmlFor="address">العنوان سيتم الشحن اليه:</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="order_input">
              <label htmlFor="copoun">الكوبون:</label>
              <input
                type="text"
                name="copoun"
                value={copoun}
                onChange={(e) => setCopoun(e.target.value)}
              />
            </div>
            <div className="order_btn">
              {error}
              <button onClick={createOrder}>
                {loading ? "Suwalif..." : "ارسال الطلب"}
              </button>
            </div>
          </div>
          <div className="order_created">
            <FontAwesomeIcon
              icon={faX}
              className="close"
              onClick={closeOrder}
            />
            <h3>تم استلام الطلب بنجاح</h3>
            <FontAwesomeIcon icon={faCheck} className="checked" />
            <div className="order_details">
              <h4>تفاصيل الطلب يرجي اخذ لقطة شاشة</h4>
              <p>
                <strong>الاسم</strong>: {order.userName}
              </p>
              <p>
                <strong>رقم الهاتف</strong>: {order.userPhone}
              </p>
              <p>
                <strong>الايميل</strong>: {user.email}
              </p>
              <p>
                <strong>المنطقة</strong>: {order.city}
              </p>
              <p>
                <strong>العنوان</strong>: {order.address}
              </p>
              <p>
                <strong>الكوبون</strong>:{" "}
                {copoun ? copoun : "لم يتم استخدام اي كوبون"}
              </p>
              <p>
                <strong>اجمالي المبلغ</strong>: {order.totalAmount} ريال
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
