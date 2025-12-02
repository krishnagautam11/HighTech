import {useEffect} from 'react';
import { Counter } from "../components/Counter/Counter"
import { ErrorComponent } from "../components/ErrorPage/ErrorComponent"
import { HeroCard } from "../components/HeroCard/HeroCard"

export const ErrorPage = () => {

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
        <div className="error-page-wrapper">
            <HeroCard  text="404 Error" PageLink="/errorpage" PageName="404 Error" />
            <Counter/>
            <ErrorComponent />
        </div>
    )
}