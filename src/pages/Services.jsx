import { Helmet } from "react-helmet-async";
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { ServicesCards } from "../components/ServicesCards/ServicesCards"

export const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services – HighTech IT Solutions</title>

        <meta
          name="description"
          content="HighTech IT Solutions offers Web Development, Mobile App Development, UI/UX Design, Digital Marketing, Cloud Services, IT Security, and custom IT solutions."
        />

        <meta property="og:title" content="Services – HighTech IT Solutions" />
        <meta
          property="og:description"
          content="Explore the wide range of IT services provided by HighTech, including development, design, marketing, cloud solutions, and more."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="services-page-wrapper">
        <HeroCard text="Services" PageLink="/services" PageName="Services" />
        <Counter />
        <ServicesCards />
      </div>
    </>
  );
};
