import { Helmet } from "react-helmet-async";
import { AboutCards } from "../components/AboutCards/AboutCards"
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Team } from "../components/Team/Team"


export const About = () => {



    return (

        <>

            <Helmet>
                <title>HighTech IT Solutions – About Us</title>
                <meta
                    name="description"
                    content="Learn about HighTech IT Solutions — our mission, expertise, and team behind delivering Web Development, UI/UX, Digital Marketing, Cloud and Security services."
                />

                <meta property="og:title" content="HighTech IT Solutions – About Us" />
                <meta property="og:description" content="Discover HighTech IT Solutions: who we are, what we do, and the team behind our IT services." />
                <meta property="og:type" content="website" />
            </Helmet>


            <div className="about-page-wrapper">
                <HeroCard text="About Us" PageLink="/about" PageName="About" />
                <Counter />
                <AboutCards />
                <Team />
            </div>
        </>
    )
}