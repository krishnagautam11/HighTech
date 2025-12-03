import { Helmet } from "react-helmet-async";
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Testimonial } from "../components/Testimonial/Testimonial"

export const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials – HighTech IT Solutions</title>

        <meta
          name="description"
          content="Read testimonials and feedback from clients who have worked with HighTech IT Solutions in Web Development, UI/UX, Digital Marketing, and Cloud Services."
        />

        <meta property="og:title" content="Testimonials – HighTech IT Solutions" />
        <meta
          property="og:description"
          content="See what clients say about the quality, reliability, and performance of HighTech's IT services."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="testimonial-page-wrapper">
        <HeroCard text="Testimonial" PageLink="/testimonial" PageName="Testimonial" />
        <Counter />
        <Testimonial />
      </div>
    </>
  );
};
