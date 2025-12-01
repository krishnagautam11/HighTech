
import { AboutCards } from "../components/AboutCards/AboutCards.jsx"
import { BlogCards } from "../components/BlogCards/BlogCards.jsx"
import { Counter } from "../components/Counter/Counter.jsx"
import { Form } from "../components/Form/Form.jsx"
import { ProjectCards } from "../components/ProjectCards/ProjectCards.jsx"
import { ServicesCards } from "../components/ServicesCards/ServicesCards.jsx"
import { Team } from "../components/Team/Team.jsx"
import { Testimonial } from "../components/Testimonial/Testimonial.jsx"
import { SplideSlider } from "../components/SplideSlider/SplideSlider.jsx"



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