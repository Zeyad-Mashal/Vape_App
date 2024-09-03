"use client";
import Navbar from "../Navbartop/Navbar";
import Image from "next/image";
import "./addToFav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import getFavoriteApi from "@/src/app/[locale]/api/favorite/getFavoriteApi";
import deleteFavoriteApi from "@/src/app/[locale]/api/favorite/deleteFavoriteApi";
const AddToFav = () => {
  useEffect(() => {
    getAllFavorites();
  }, []);
  const [allFavorite, setAllFavorite] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const getAllFavorites = () => {
    getFavoriteApi(setloading, setError, setAllFavorite);
  };
  const deleteFavorite = (productId) => {
    deleteFavoriteApi(setError, setAllFavorite, setloading, productId);
  };
  return (
    <>
      <Navbar />
      <section className="addToFav">
        <div className="fav_container">
          <h2>منتاجاتك المفضلة</h2>
          <div className="list_fav">
            {loading ? (
              <p className="cart_loading">Vape App...</p>
            ) : (
              allFavorite?.map((item) => {
                return (
                  <div className="item_item" key={item._id}>
                    <Image
                      src={item.product.images[0]}
                      width={500}
                      height={500}
                      alt="fav product"
                    />
                    <div className="content_fav">
                      <h3>{item.product.name}</h3>
                      <div className="content_bottom_fav">
                        <p>{item.product.price} ريال</p>
                        <FontAwesomeIcon
                          icon={faHeart}
                          width={50}
                          onClick={() => deleteFavorite(item.product._id)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToFav;
