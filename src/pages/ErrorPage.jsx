import { Counter } from "../components/atomic-components/Counter/Counter"
import { ErrorComponent } from "../components/atomic-components/ErrorPage/ErrorComponent"
import { HeroCard } from "../components/atomic-components/HeroCard/HeroCard"

export const ErrorPage = () => {
    return (
        <div className="error-page-wrapper">
            <HeroCard />
            <Counter/>
            <ErrorComponent />
        </div>
    )
}