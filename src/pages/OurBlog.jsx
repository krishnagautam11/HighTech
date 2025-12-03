import { Helmet } from "react-helmet-async";
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { BlogCards } from "../components/BlogCards/BlogCards"

export const OurBlog = () => {
  return (
    <>
      <Helmet>
        <title>Our Blog – HighTech IT Solutions</title>

        <meta
          name="description"
          content="Read blogs, articles, and insights from HighTech IT Solutions on web development, UI/UX design, digital marketing, cloud technologies, and modern IT trends."
        />
        
        <meta property="og:title" content="Our Blog – HighTech IT Solutions" />
        <meta
          property="og:description"
          content="Explore informative articles on development, UI/UX, marketing trends, and the latest in IT innovation."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="blog-page-wrapper">
        <HeroCard text="Our Blog" PageLink="/blog" PageName="Blog" />
        <Counter />
        <BlogCards />
      </div>
    </>
  );
};
