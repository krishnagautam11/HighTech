import { Helmet } from "react-helmet-async";
import { AboutCards } from "../components/AboutCards/AboutCards.jsx"
import { BlogCards } from "../components/BlogCards/BlogCards.jsx"
import { Counter } from "../components/Counter/Counter.jsx"
import { Form } from "../components/Form/Form.jsx"
import { ProjectCards } from "../components/ProjectCards/ProjectCards.jsx"
import { ServicesCards } from "../components/ServicesCards/ServicesCards.jsx"
import { Team } from "../components/Team/Team.jsx"
import { Testimonial } from "../components/Testimonial/Testimonial.jsx"
import { SplideSlider } from "../components/SplideSlider/SplideSlider.jsx"
import Accordion, { FaqList } from "../components/Accordion/Accordion.jsx"
import { useJsonLd } from "../hooks/useJsonLd/useJsonLd.js"

export const Home = () => {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FaqList.map(item => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.data
      }
    }))
  };

  useJsonLd(faqSchema);

  return (
    <>
      <Helmet>
        <title>HighTech IT Solutions – Web Development, UI/UX, Marketing & IT Services</title>

        <meta
          name="description"
          content="HighTech IT Solutions offers top-quality Web Development, UI/UX Design, Digital Marketing, Cloud Services, Security Solutions, and complete IT support for businesses."
        />

        <meta property="og:title" content="HighTech IT Solutions – Professional Web & IT Services" />
        <meta
          property="og:description"
          content="Get expert website development, marketing, UI/UX, and IT solutions from HighTech. Transform your business with digital excellence."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="home-page">
        <SplideSlider />
        <Counter />
        <AboutCards />
        <ServicesCards />
        <ProjectCards />
        <BlogCards />
        <Team />
        <Testimonial />
        <Accordion />
        <Form />
      </div>
    </>
  );
};

