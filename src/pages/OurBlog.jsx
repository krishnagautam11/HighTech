import { Counter } from "../components/atomic-components/Counter/Counter"
import { HeroCard } from "../components/atomic-components/HeroCard/HeroCard"
import { BlogCards } from "../components/atomic-components/BlogCards/BlogCards"

export const OurBlog = () => {
    return (
        <div className="blog-page-wrapper">
            <HeroCard />
            <Counter />
            <BlogCards />

        </div>
    )
}