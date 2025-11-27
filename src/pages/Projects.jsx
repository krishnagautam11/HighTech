import { Counter } from "../components/atomic-components/Counter/Counter"
import { HeroCard } from "../components/atomic-components/HeroCard/HeroCard"
import { ProjectCards } from "../components/atomic-components/ProjectCards/ProjectCards"

export const Projects = () => {
    return (
        <div className="projects-page-wrapper">
            <HeroCard />
            <Counter />
            <ProjectCards />
        </div>
    )
}