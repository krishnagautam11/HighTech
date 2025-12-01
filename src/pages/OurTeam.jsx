import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Team } from "../components/Team/Team"


export const OurTeam = () => {
    return (
        <div className="team-page-wrapper">
            <HeroCard text="Our Team" PageLink="/team" PageName="Team" />
            <Counter />
            <Team/>

        </div>
    )
}