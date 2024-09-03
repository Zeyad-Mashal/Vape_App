import React, { useEffect } from "react";
import "./CartModel.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const CartModel = () => {
  useEffect(() => {
    setTimeout(() => {
      let model = document.querySelector(".cart_model");
      model.style.display = "none";
    }, 3000);
  }, []);

  return (
    <div className="cart_model">
      <div className="container">
        <Image
          src={"/images/logo.png"}
          width={1000}
          height={1000}
          alt="add to cart model"
        />
        <h1>تمت أضافة المنتج الي السلة بنجاح</h1>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  );
};

export default CartModel;
