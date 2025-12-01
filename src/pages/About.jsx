import { AboutCards } from "../components/AboutCards/AboutCards"
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Team } from "../components/Team/Team"


export const About = () => {
    return (
        <div className="about-page-wrapper">
            <HeroCard text="About Us" PageLink="/about" PageName="About"/>
            <Counter/>
            <AboutCards/>
            <Team/>
        </div>
    )
}