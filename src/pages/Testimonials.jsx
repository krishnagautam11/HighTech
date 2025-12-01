import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Testimonial } from "../components/Testimonial/Testimonial"


export const Testimonials = () => {
    return (
        <div className="testimonial-page-wrapper">
            <HeroCard text="Testimonial" PageLink="/testimonial" PageName="Testimonial"/>
            <Counter />
            <Testimonial/>

        </div>
    )
}