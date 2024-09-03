"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Details.css";
import NavbarTop from "../../Navbartop/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf, faX } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import getProductByIdApi from "@/src/app/[locale]/api/product/getProductByIdApi";
import { useParams } from "next/navigation";
import addToFavoriteApi from "@/src/app/[locale]/api/favorite/addToFavoriteApi";
import addToCartApi from "@/src/app/[locale]/api/cart/addToCartApi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Details = () => {
  useEffect(() => {
    getProductById();
  }, []);
  const { push } = useRouter();

  const [count, setCount] = useState(1);
  const [products, setProducts] = useState({});
  const [relatedProducts, setRelatedproducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);
  const param = useParams();
  const { productId } = param;
  const [originalPrice, setOriginalPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);
  const lang = window.localStorage.getItem("translation");
  const user_token = window.localStorage.getItem("user");
  const incrementCount = () => {
    setCount(count + 1);
    const productDetails = products;
    productDetails.price = originalPrice * (count + 1);
    setTotalPrice(productDetails.price);
    productDetails.price = originalPrice;
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      const productDetails = products;
      productDetails.price = originalPrice * (count - 1);
      setTotalPrice(productDetails.price);
      productDetails.price = originalPrice;
    }
  };
  const getProductById = () => {
    getProductByIdApi(
      setloading,
      setError,
      setProducts,
      setRelatedproducts,
      productId,
      setOriginalPrice
    );
  };
  const addToFavorite = () => {
    if (user_token) {
      addToFavoriteApi(setloading, setError, productId);
    } else {
      push(`/${lang}/register`);
    }
  };
  const addToCart = (productId) => {
    if (user_token) {
      const data = {
        quantity: count,
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
    <>
      <NavbarTop />
      <div className="details">
        <div className="details_container">
          <div className="details_item">
            <div className="item_image">
              <Swiper
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {products?.images?.map((item) => {
                  return (
                    <SwiperSlide key={item._id}>
                      <Image
                        src={item}
                        width={1000}
                        height={1000}
                        alt="product details page"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="cart_popop">
              <FontAwesomeIcon icon={faX} onClick={closeCartPopup} />
              <Image
                src={"/images/logo.png"}
                alt="cart logo"
                width={500}
                height={500}
              />
              <h3>تمت الاضافة الي السلة</h3>
              <Link href={`${lang}/cart`}>عرض السلة</Link>
            </div>
            <div className="item_content">
              <h3>{products?.name}</h3>
              <h4>
                <span>100 ريال</span> {products?.price} ريال
              </h4>
              <div className="details_info">
                <p>
                  <strong>رمز المنتج</strong>: hiliq-12000-puffs-20mg
                </p>
                <p>
                  <strong>التصنيفات</strong>: ديسبوسبل, سحبة السيجارة
                </p>
                <p>
                  <strong>العلامة التجارية</strong>: HiLIQ
                </p>
                <div className="details_flavour">
                  <p>النكهة: </p>
                  <select>
                    <option value="النكهات">النكهات</option>
                    <option value="النكهات">النكهات</option>
                    <option value="النكهات">النكهات</option>
                    <option value="النكهات">النكهات</option>
                  </select>
                </div>
              </div>
              <div className="price_quantity">
                <div className="qunatity_container">
                  <div className="quantity">
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                  </div>
                </div>
                <div className="cart_done cart_btn">
                  <button onClick={() => addToCart(products._id)}>
                    أضف الي السلة
                  </button>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fav_icon"
                    onClick={addToFavorite}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relatedProducts">
            <h2>Related Products</h2>
            <div className="relatedProductsList">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {loading ? (
                  <p className="details_loading">Suwalif...</p>
                ) : (
                  relatedProducts?.map((item) => {
                    return (
                      <SwiperSlide key={item._id}>
                        <Link href={`/${lang}/details/${item._id}`}>
                          <div className="relatedProducts_item">
                            <Image
                              src={item.images[0]}
                              width={1000}
                              height={1000}
                              alt="related product"
                            />
                            <span>النكهات سولت نيكوتين</span>

                            <h3>{item.name}</h3>
                            <div className="related_info">
                              <h4>{item.price} ريال</h4>
                              <button>أضف الي السلة</button>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
