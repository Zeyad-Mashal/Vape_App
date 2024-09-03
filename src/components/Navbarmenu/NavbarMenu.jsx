"use client";
import Link from "next/link";
import "./NavbarMenu.css";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import getCategoriesApi from "../../app/[locale]/api/category/getCategoriesApi";
const NavbarMenu = () => {
  useEffect(() => {
    getAllCategories();
  }, []);
  const t = useTranslations("navbar");
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const getAllCategories = () => {
    getCategoriesApi(setloading, setError, setAllCategories);
  };
  const lang = window.localStorage.getItem("translation");
  return (
    <>
      <nav className="navbar_bottom">
        <ul className="mainMenu">
          <li>
            <Link href={`/`}>{t("main")}</Link>
          </li>
          <li className="menu">
            <Link href={`/`}>{t("nav2")}</Link>
            <div className="menu_bottom">
              <p>{t("nav3")}</p>
              <p>{t("nav3")}</p>
              <p>{t("nav3")}</p>
            </div>
          </li>
          {loading
            ? "Loading..."
            : allCategories.map((item) => {
                return (
                  <li key={item._id}>
                    <Link href={`/${lang}/category/${item._id}`}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
        </ul>
      </nav>
    </>
  );
};

export default NavbarMenu;
