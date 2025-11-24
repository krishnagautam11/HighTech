
import { AboutCards } from "../components/atomic-components/AboutCards/AboutCards.jsx"
import { Counter } from "../components/atomic-components/Counter/Counter.jsx"
import { SplideSlider } from "../components/composed-components/SplideSlider"

export const Home = () => {
    return (
        <div className="home-page">

            <SplideSlider />
            <Counter/>
            <AboutCards/>
        </div>
    )
}