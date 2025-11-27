
import { Counter } from "../components/atomic-components/Counter/Counter"
import { HeroCard } from "../components/atomic-components/HeroCard/HeroCard"
import { ServicesCards } from "../components/atomic-components/ServicesCards/ServicesCards"

export const Services = () => {
    return (
        <div className="services-page-wrapper">
            <HeroCard />
            <Counter />
            <ServicesCards />

        </div>
    )
}