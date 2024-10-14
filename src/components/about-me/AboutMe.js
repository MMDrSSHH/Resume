"use client";

import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Container from "../shared/Container";
import ParagraphTitle from "../shared/ParagraphTitle";
import Paragraph from "../shared/Paragraph";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function AboutMe() {
  const { t } = useTranslation(["home"]);
  return (
    <div className="min-h-screen relative pt-[40px]">
      <SectionTitle
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          amount: "all",
          once: true,
        }}
        className="mb-[90px]"
      >
        {t("aboutMeTitle")}
      </SectionTitle>
      <Container className="text-white">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: "all", once: true }}
        >
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
            className="mb-[12px]"
          >
            {t("aboutMeLabel")}
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
          >
            {t("aboutMeParagraph")}
          </Paragraph>
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: "all", once: true }}
        >
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
            className="mt-[60px] mb-[12px]"
          >
            {t("projectHandlingLabel")}
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
          >
            {t("projectHandlingParagraph")}
          </Paragraph>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutMe;
