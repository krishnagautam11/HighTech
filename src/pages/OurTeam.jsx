import { Counter } from "../components/atomic-components/Counter/Counter"
import { HeroCard } from "../components/atomic-components/HeroCard/HeroCard"
import { Team } from "../components/atomic-components/Team/Team"


export const OurTeam = () => {
    return (
        <div className="team-page-wrapper">
            <HeroCard />
            <Counter />
            <Team/>

        </div>
    )
}