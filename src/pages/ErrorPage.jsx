import { Helmet } from "react-helmet-async";
import { Counter } from "../components/Counter/Counter"
import { ErrorComponent } from "../components/ErrorPage/ErrorComponent"
import { HeroCard } from "../components/HeroCard/HeroCard"

export const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | HighTech IT Solutions</title>
        
        <meta
          name="description"
          content="The page you are looking for does not exist. Explore our website to learn more about HighTech IT Solutions."
        />
        
        <meta property="og:title" content="404 Error – Page Not Found" />
        <meta
          property="og:description"
          content="This page is not available. Visit HighTech IT Solutions for our latest services and projects."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="error-page-wrapper">
        <HeroCard text="404 Error" PageLink="/errorpage" PageName="404 Error" />
        <Counter />
        <ErrorComponent />
      </div>
    </>
  );
};
