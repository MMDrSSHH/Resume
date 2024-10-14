import LanguageChanger from "@/components/i18n/LanguageChanger";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/i18n/TranslationsProvider";
import Quotes from "@/components/quotes/Quotes";
import Summary from "@/components/summary/Summary";
import TechStack from "@/components/tech-stack/TechStack";
import Experiences from "@/components/experiences/Experiences";
import AboutMe from "@/components/about-me/AboutMe";
import Footer from "@/components/footer/Footer";
import Social from "@/components/social/Social";

async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["home"]);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={["home"]}
      resources={resources}
    >
      <div className="overflow-x-hidden overflow-y-hidden">
        <Quotes />
        <Summary />
        {/* <div className="h-[300px]" /> */}
        <TechStack />
        {/* <div className="h-[600px]" /> */}
        <Experiences />
        <AboutMe />
        <Social />
        <Footer t={t} />
      </div>
    </TranslationsProvider>
  );
}

export default Home;
