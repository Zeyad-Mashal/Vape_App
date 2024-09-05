"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../Navbartop/Navbar";
import "./Category.css";
import Image from "next/image";
import Footer from "../../Footer/Footer";
import { useParams } from "next/navigation";
import getByCategoryApi from "@/src/app/[locale]/api/category/getByCategoryApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
const Category = () => {
  useEffect(() => {
    getAllproductsByCategory();
  }, []);
  const params = useParams();
  const { categoryId } = params;
  const { push } = useRouter();

  const [allProductsByCategory, setAllProductsByCategory] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const getAllproductsByCategory = () => {
    getByCategoryApi(
      setloading,
      setError,
      setAllProductsByCategory,
      categoryId
    );
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
  return (
    <>
      <Navbar />

      <div className="category">
        <h1>{allProductsByCategory[0]?.category}</h1>
        <div className="category_container">
          <div className="filter_container">
            <p>
              التصنيفات
              <ul>
                <li>أجهزة الشيشة</li>
                <li>الإكسسوارات</li>
                <li>التانكات</li>
                <li>التبغ المعدّ للتسخي</li>
                <li>النكهات</li>
              </ul>
            </p>
          </div>
          <div className="category_list">
            {loading ? (
              <p className="category_loading">Vape App...</p>
            ) : (
              allProductsByCategory.map((item) => {
                return (
                  <div className="category_item" key={item._id}>
                    <Link href={`/${lang}/details/${item._id}`}>
                      <Image
                        src={item.images[0]}
                        width={1000}
                        height={1000}
                        alt="category product"
                      />
                    </Link>
                    <div className="category_content">
                      <span>النكهات سولت نيكوتين</span>
                      <h3>{item.name}</h3>
                      <div className="category_content_info">
                        <p>{item.price} ريال</p>
                        <button onClick={() => addToCart(item._id)}>
                          اضف الي السلة
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Category;
