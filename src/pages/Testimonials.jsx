import { Counter } from "../components/atomic-components/Counter/Counter"
import { HeroCard } from "../components/atomic-components/HeroCard/HeroCard"
import { Testimonial } from "../components/atomic-components/Testimonial/Testimonial"


export const Testimonials = () => {
    return (
        <div className="testimonial-page-wrapper">
            <HeroCard />
            <Counter />
            <Testimonial/>

        </div>
    )
}