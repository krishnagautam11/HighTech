import { AboutCards } from "../components/atomic-components/AboutCards/AboutCards"
import { Counter } from "../components/atomic-components/Counter/Counter"
import { HeroCard } from "../components/atomic-components/HeroCard/HeroCard"
import { Team } from "../components/atomic-components/Team/Team"


export const About = () => {
    return (
        <div className="about-page-wrapper">
            <HeroCard />
            <Counter/>
            <AboutCards/>
            <Team/>
        </div>
    )
}