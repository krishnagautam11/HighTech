import {useEffect} from 'react';
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { BlogCards } from "../components/BlogCards/BlogCards"

export const OurBlog = () => {

     useEffect(() => {
    document.title = "HighTech IT Solutions - Home";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'We provide Web Development, Digital Marketing, UI/UX, Security and more services.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'We provide Web Development, Digital Marketing, UI/UX, Security and more services.';
      document.head.appendChild(meta);
    }
  }, []);

    return (
        <div className="blog-page-wrapper">
            <HeroCard text="Our Blog" PageLink="/blog" PageName="Blog"  />
            <Counter />
            <BlogCards />

        </div>
    )
}