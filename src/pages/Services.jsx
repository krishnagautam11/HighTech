import {useEffect} from 'react';
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { ServicesCards } from "../components/ServicesCards/ServicesCards"

export const Services = () => {

     useEffect(() => {
    document.title = "HighTech IT Solutions - Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'We provide Web Development.',
        'title',
        'HighTech IT Solutions - Services'

      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.title='HighTech IT Solutions - Services';
      meta.content = 'We provide Web Development, Digital Marketing, UI/UX, Security and more services.';
      document.head.appendChild(meta);
    }
  }, []);

    return (
        <div className="services-page-wrapper">
            <HeroCard text="Services" PageLink="/services" PageName="Services"/>
            <Counter />
            <ServicesCards />

        </div>
    )
}