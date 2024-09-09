
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"
import BootStrap from "../../components/BootStrap";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import styles from "./styles.module.css"
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Vape App",
  description: "Vape App Made By Zeyad Mashaal",
}


type Props = {
  children: React.ReactNode;
  params: {
    locale: "ar" | "en"
  }
}


export default async function RootLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body className={locale === "ar" ? styles.arbic : styles.english}>
          {children}
          <BootStrap />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
