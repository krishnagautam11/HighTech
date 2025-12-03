import { Helmet } from "react-helmet-async";
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Form } from "../components/Form/Form"

export const Contact = () => {



  return (

    <>
      <Helmet>
        <title>HighTech IT Solutions – Contact</title>

        <meta
          name="description"
          content="Contact HighTech IT Solutions for Website Development, UI/UX Design, Digital Marketing, Security Solutions, and all IT services."
        />

        <meta property="og:title" content="HighTech IT Solutions – Contact" />
        <meta
          property="og:description"
          content="Get in touch with HighTech IT Solutions for professional web development, UI/UX, marketing and digital solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="contact-page-wrapper">
        <HeroCard text="Contact Us" PageLink="/contact" PageName="Contact" />
        <Counter />
        <Form />

      </div>
      </>
  )
}