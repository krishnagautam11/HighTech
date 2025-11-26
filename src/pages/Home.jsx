
import { AboutCards } from "../components/atomic-components/AboutCards/AboutCards.jsx"
import { BlogCards } from "../components/atomic-components/BlogCards/BlogCards.jsx"
import { Counter } from "../components/atomic-components/Counter/Counter.jsx"
import { Form } from "../components/atomic-components/Form/Form.jsx"
import { ProjectCards } from "../components/atomic-components/ProjectCards/ProjectCards.jsx"
import { ServicesCards } from "../components/atomic-components/ServicesCards/ServicesCards.jsx"
import { Team } from "../components/atomic-components/Team/Team.jsx"
import { Testimonial } from "../components/atomic-components/Testimonial/Testimonial.jsx"
import { SplideSlider } from "../components/composed-components/SplideSlider"

export const Home = () => {
    return (
        <div className="home-page">

            <SplideSlider />
            <Counter />
            <AboutCards />
            <ServicesCards />
            <ProjectCards/>
            <BlogCards/>
            <Team/>
            <Testimonial/>
            <Form/>
        </div>
    )
}