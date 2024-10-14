"use client";

import React from "react";
import SectionTitle from "../shared/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import Container from "../shared/Container";
import { useTranslation } from "react-i18next";

function Experiences() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="min-h-screen relative pt-[40px]">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        viewport={{ amount: "all", once: true }}
        className="mb-[90px]"
      >
        {t("experiencesTitle")}
      </SectionTitle>
      {/* Experience items */}
      <Container>
        <ExperienceCard
          company={t("azhmanTitle")}
          position={t("azhmanPos")}
          description={t("azhmanDesc")}
          from={t("azhmanFrom")}
          to={t("azhmanTo")}
        />
      </Container>
    </div>
  );
}

export default Experiences;
