
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { ServicesCards } from "../components/ServicesCards/ServicesCards"

export const Services = () => {
    return (
        <div className="services-page-wrapper">
            <HeroCard text="Services" PageLink="/services" PageName="Services"/>
            <Counter />
            <ServicesCards />

        </div>
    )
}