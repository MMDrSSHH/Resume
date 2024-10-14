import localFont from "next/font/local";
import { dir } from "i18next";
import "./globals.css";
import i18nConfig from "../../../i18nConfig";
import Footer from "@/components/footer/Footer";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const roboto = localFont({
  src: [
    {
      path: "../../fonts/Roboto/Roboto-Regular.ttf",
      weight: "200",
    },
    {
      path: "../../fonts/Roboto/Roboto-Medium.ttf",
      weight: "400",
    },
    {
      path: "../../fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../fonts/Roboto/Roboto-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-roboto",
});

export const iranSans = localFont({
  src: [
    {
      path: "../../fonts/IranSans/IRANSansXFaNum-Regular.woff2",
      weight: "200",
    },
    {
      path: "../../fonts/IranSans/IRANSansXFaNum-Medium.woff2",
      weight: "400",
    },
    {
      path: "../../fonts/IranSans/IRANSansXFaNum-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../fonts/IranSans/IRANSansXFaNum-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-iran-sans",
});

export const metadata = {
  title: "MhmmdSh",
  description: "My personal protfolio website",
};

const getLocaleFontCls = (locale) => {
  switch (locale) {
    case "fa":
      return iranSans.className;
    case "en":
    default:
      return roboto.className;
  }
};

// generates static site generation pages per locale
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={dir(locale)} className={getLocaleFontCls(locale)}>
      <body
        className="bg-background overflow-auto"
        dir={locale === "fa" ? "rtl" : "ltr"}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
