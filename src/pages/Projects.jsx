import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { ProjectCards } from "../components/ProjectCards/ProjectCards"

export const Projects = () => {
    return (
        <div className="projects-page-wrapper">
            <HeroCard text="Projects" PageLink="/projects" PageName="Projects"/>
            <Counter />
            <ProjectCards />
        </div>
    )
}