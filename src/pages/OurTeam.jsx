import { Helmet } from "react-helmet-async";
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Team } from "../components/Team/Team"

export const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>Our Team – HighTech IT Solutions</title>

        <meta
          name="description"
          content="Meet the expert team members behind HighTech IT Solutions — skilled professionals in Web Development, UI/UX, Digital Marketing, Cloud Services, and Security."
        />

        <meta property="og:title" content="Our Team – HighTech IT Solutions" />
        <meta
          property="og:description"
          content="Discover the talented developers, designers, marketers, and IT specialists who power HighTech IT Solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="team-page-wrapper">
        <HeroCard text="Our Team" PageLink="/team" PageName="Team" />
        <Counter />
        <Team />
      </div>
    </>
  );
};
