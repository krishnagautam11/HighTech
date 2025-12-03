import { Helmet } from "react-helmet-async";
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { ProjectCards } from "../components/ProjectCards/ProjectCards"

export const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects – HighTech IT Solutions</title>

        <meta
          name="description"
          content="Explore the completed projects by HighTech IT Solutions, including Web Development, UI/UX Design, Digital Marketing, Cloud Solutions, and custom IT applications."
        />

        <meta property="og:title" content="Projects – HighTech IT Solutions" />
        <meta
          property="og:description"
          content="Discover the innovative and professional IT projects completed by HighTech, showcasing our development, marketing, UI/UX, and cloud expertise."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="projects-page-wrapper">
        <HeroCard text="Projects" PageLink="/projects" PageName="Projects" />
        <Counter />
        <ProjectCards />
      </div>
    </>
  );
};
