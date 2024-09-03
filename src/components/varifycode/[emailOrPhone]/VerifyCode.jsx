"use client";
import { useState } from "react";
import Image from "next/image";
import "./code.css";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import VerificationLoginCode from "../../../app/[locale]/api/auth/VerificationLogin.api";
const VerifyCodePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();
  let { emailOrPhone } = params;
  emailOrPhone = decodeURIComponent(emailOrPhone);
  const { push } = useRouter();
  const [code1, setCode1] = useState("");
  const hendleVerifyCode = () => {
    if (code1 == "") {
      setError("Please enter the verification code");
    } else {
      const code = code1;
      const data = {
        emailOrPhone,
        verificationCode: code,
      };
      VerificationLoginCode(setLoading, setError, push, data);
    }
    console.log(emailOrPhone);
  };

  return (
    <main>
      <div className="register_conatiner">
        <div className="image_register">
          <Image
            src="/images/banner.webp"
            height={800}
            width={800}
            alt="register banner"
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
            <h2 className="text-center">Verify Code</h2>
            <h4 className="text-slate-300">Check Your Email Or SMS Message</h4>
            <div className="code_inputs">
              <input
                type="text"
                value={code1}
                onChange={(e) => setCode1(e.target.value)}
              />
            </div>
            {error}
            <button className="submit_btn active" onClick={hendleVerifyCode}>
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyCodePage;
