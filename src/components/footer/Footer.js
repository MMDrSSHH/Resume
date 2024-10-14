import { NextLogo } from "@/static/svgs";
import React from "react";
import LanguageChanger from "../i18n/LanguageChanger";

function Footer({ t }) {
  return (
    <div className="py-[12px] bg-slate-950 text-[14px] sm:text-[18px] text-white text-center mt-[200px] relative">
      {t("footer")} <NextLogo className="text-[24px] sm:text-[36px] inline-block" />
      <div className="absolute left-[36px] top-1/2 -translate-y-1/2">
        <LanguageChanger />
      </div>
    </div>
  );
}

export default Footer;
