import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faXTwitter,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo">Vape App</div>
        <div className="footer_social">
          <Link href="https://www.instagram.com/suwaliftea/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <FontAwesomeIcon icon={faSnapchat} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faTiktok} />
          <Link href="https://suwaliftea.com/" target="_blank">
            <FontAwesomeIcon icon={faEarthAmericas} />
          </Link>
        </div>
        <div className="footer_list">
          <div className="footer_form">
            <form>
              <h3>{t("title")}</h3>
              <input type="text" placeholder="اسمك" />
              <input type="text" placeholder="رقم الهاتف" />
              <textarea placeholder="رسالتك"></textarea>
              <button>ارسال</button>
            </form>
          </div>
          <div className="imp_links">
            <h2>{t("links")}</h2>
            <ul>
              <li>
                <Link href="/components/transport">{t("transport")}</Link>
              </li>
              <li>
                <Link href="/components/usage">{t("usege")}</Link>
              </li>
              <li>
                <Link href="/components/receive">{t("backup")}</Link>
              </li>
              <li>
                <Link href="tel:+966566277936">
                  {t("Wholesale")}
                  <FontAwesomeIcon icon={faWhatsapp} className="whatsapp" />
                </Link>
              </li>
              <li>
                <Link href="mailto:support@suwalif-products.com">
                  {t("email")}
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
