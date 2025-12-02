import {useEffect} from 'react';
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Testimonial } from "../components/Testimonial/Testimonial"


export const Testimonials = () => {

     useEffect(() => {
    document.title = "HighTech IT Solutions - Testimonials";

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
        <div className="testimonial-page-wrapper">
            <HeroCard text="Testimonial" PageLink="/testimonial" PageName="Testimonial"/>
            <Counter />
            <Testimonial/>

        </div>
    )
}