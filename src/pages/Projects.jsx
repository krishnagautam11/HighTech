import {useEffect} from 'react';
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { ProjectCards } from "../components/ProjectCards/ProjectCards"

export const Projects = () => {

     useEffect(() => {
    document.title = "HighTech IT Solutions - Projects";

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
        <div className="projects-page-wrapper">
            <HeroCard text="Projects" PageLink="/projects" PageName="Projects"/>
            <Counter />
            <ProjectCards />
        </div>
    )
}