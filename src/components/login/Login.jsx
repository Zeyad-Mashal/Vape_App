"use client";

import Image from "next/image";
import "../register/register.css";
import LoginAPI from "../../app/[locale]/api/auth/login.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
const LoginPage = () => {
  const t = useTranslations("login");
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailOrPhone, setemailOrPhone] = useState("");

  const handleLogin = () => {
    if (emailOrPhone == "") {
      setError("Please enter your email or phone number");
    } else {
      const data = {
        emailOrPhone: emailOrPhone,
      };
      LoginAPI(setLoading, setError, data, push);
    }
  };
  return (
    <main>
      <title>login page</title>
      <meta name="description" content="Verify Your Account" />
      <div className="register_conatiner">
        <div className="image_register">
          <Image
            src="/images/banner.webp"
            height={800}
            width={800}
            alt="login banner"
            loading="lazy"
            className="register_image"
          />
        </div>
        <div className="register_form">
          <Image
            src="/images/logo.png"
            height={150}
            width={150}
            alt="register banner"
            loading="lazy"
            className="register_image mb-3"
          />
          <div className="form_register">
            <h2 className="text-center">{t("title")}</h2>
            <input
              type="email"
              placeholder="ادخل البريد الالكتروني او رقم الهاتف"
              className="email_input"
              value={emailOrPhone}
              onChange={(e) => setemailOrPhone(e.target.value)}
            />
            {error}
            <button className="submit_btn active" onClick={handleLogin}>
              {loading ? "Loading..." : "تسجيل"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
