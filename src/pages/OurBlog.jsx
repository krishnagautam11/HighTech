import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { BlogCards } from "../components/BlogCards/BlogCards"

export const OurBlog = () => {
    return (
        <div className="blog-page-wrapper">
            <HeroCard text="Our Blog" PageLink="/blog" PageName="Blog"  />
            <Counter />
            <BlogCards />

        </div>
    )
}