"use client";

import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Container from "../shared/Container";
import ParagraphTitle from "../shared/ParagraphTitle";
import Paragraph from "../shared/Paragraph";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Summary() {
  const { t } = useTranslation(["home"]);
  return (
    <div className="min-h-screen relative pt-[40px]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: "all",
          }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <SectionTitle
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="mt-[40px]"
          >
            {t("summaryTitle")}
          </SectionTitle>
          <div className="flex flex-col gap-[44px] text-white mt-[160px]">
            <ParagraphTitle
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="self-start"
            >
              {t("fullStackDeveloper")}
            </ParagraphTitle>
            <Paragraph
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="w-full lg:w-[60%]"
            >
              {t("summaryParagraph")}
            </Paragraph>
          </div>
        </motion.div>
      </Container>
      <div className="w-[400px] aspect-square rounded-full bg-elevate/50 blur-[140px] absolute bottom-0 -right-[5%] -z-10" />
    </div>
  );
}

export default Summary;
