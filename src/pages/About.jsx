import {useEffect} from 'react';
import { AboutCards } from "../components/AboutCards/AboutCards"
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Team } from "../components/Team/Team"


export const About = () => {

    useEffect(() => {
        document.title = "HighTech IT Solutions - About";

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
        <div className="about-page-wrapper">
            <HeroCard text="About Us" PageLink="/about" PageName="About" />
            <Counter />
            <AboutCards />
            <Team />
        </div>
    )
}