"use client";

import React from "react";
import SectionTitle from "../shared/SectionTitle";
import TechStackItem from "./TechStackItem";
import {
  HtmlLogo,
  CssLogo,
  TailwindLogo,
  JavascriptLogo,
  ReactLogo,
  NextLogo,
  CSharpLogo,
  DotNetLogo,
  MSSqlServerLogo,
  NodeJsLogo,
  GitLogo,
  GitHubLogo,
  ExpressJsLogo,
  MongoDbLogo,
  DockerLogo,
} from "@/static/svgs";
import TechItem from "./TechItem";
import Container from "../shared/Container";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function TechStack() {
  const { t } = useTranslation(["home"]);
  return (
    <div className="min-h-screen relative pt-[40px]">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: "all", once: true }}
        className="mb-[280px]"
      >
        {t("techStackTitle")}
      </SectionTitle>

      {/* Items */}
      <Container className="flex flex-col gap-[180px] lg:gap-[360px] items-center">
        {/* Html5 */}
        <TechStackItem
          icon={<HtmlLogo />}
          title={t("htmlDesc")}
          glareColor="bg-[#E44D26]"
        />
        {/* Css3 */}
        <TechStackItem
          icon={<CssLogo />}
          title={t("cssDesc")}
          glareColor="bg-[#29A9DF]"
        />
        {/* Tailwind */}
        <TechStackItem
          icon={<TailwindLogo className="text-[240px]" />}
          title={t("tailwindDesc")}
          glareColor="bg-[#38BDF8]"
        />
        {/* Javascript */}
        <TechStackItem
          icon={<JavascriptLogo />}
          title={t("javascriptDesc")}
          glareColor="bg-[#FFDA3E]"
        />
        {/* React */}
        <TechStackItem
          icon={<ReactLogo />}
          title={t("reactDesc")}
          glareColor="bg-[#61DAFB]"
        />
        {/* Nextjs */}
        <TechStackItem
          icon={<NextLogo />}
          title={
            <span>
              {t("nextDescFirst")} <br />=
              <br /> {t("nextDescLast")}
            </span>
          }
          glareColor="bg-[#FFFFFF]"
        />

        {/* C# */}
        <TechStackItem
          icon={<CSharpLogo />}
          title={t("cSharpDesc")}
          glareColor="bg-[#822C98]"
        />

        {/* .Net core */}
        <TechStackItem
          icon={<DotNetLogo />}
          title={t("dotNetDesc")}
          glareColor="bg-[#6C429C]"
        />

        {/* Sql Server */}
        <TechStackItem
          icon={<MSSqlServerLogo className="text-white" />}
          title={t("sqlServerDesc")}
          glareColor="bg-[#FFFFFF]"
        />
      </Container>

      {/* Also */}
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "all" }}
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
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
            className="mt-[200px] lg:mt-[600px] mb-[60px]"
          >
            {t("also")}
          </SectionTitle>
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-[24px]">
            <TechItem logo={<NodeJsLogo />} title="NodeJs" />
            <TechItem
              logo={<ExpressJsLogo className="text-white" />}
              title="Expressjs"
            />
            <TechItem logo={<MongoDbLogo />} title="MongoDb" />
            <TechItem logo={<DockerLogo />} title="Docker" />
            <TechItem logo={<GitLogo />} title="Git" />
            <TechItem
              logo={<GitHubLogo className="text-white" />}
              title="Github"
            />
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              className="flex justify-center items-center mt-[44px] lg:mt-0 sm:col-span-2 md:col-span-2 text-white"
            >
              {t("comming")}
            </motion.div>
          </div>
        </motion.div>
      </Container>

      <Container className="flex flex-col gap-[24px] mt-[600px] text-center text-white min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          viewport={{ amount: "all", once: true }}
        >
          <p className="text-[24px] md:text-[36px] font-medium">
            {t("theEndTitle")}
          </p>
          <p className="text-[14px] md:text-[18px] font-extralight">
            {t("theEndBody")}
          </p>
        </motion.div>
      </Container>
    </div>
  );
}

export default TechStack;
