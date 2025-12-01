import { Counter } from "../components/Counter/Counter"
import { ErrorComponent } from "../components/ErrorPage/ErrorComponent"
import { HeroCard } from "../components/HeroCard/HeroCard"

export const ErrorPage = () => {
    return (
        <div className="error-page-wrapper">
            <HeroCard  text="404 Error" PageLink="/errorpage" PageName="404 Error" />
            <Counter/>
            <ErrorComponent />
        </div>
    )
}