import {useEffect} from 'react';
import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Form } from "../components/Form/Form"

export const Contact = () => {

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
        <div className="contact-page-wrapper">
            <HeroCard  text="Contact Us" PageLink="/contact" PageName="Contact" />
            <Counter />
            <Form />

        </div>
    )
}