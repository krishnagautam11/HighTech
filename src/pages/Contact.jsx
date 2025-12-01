import { Counter } from "../components/Counter/Counter"
import { HeroCard } from "../components/HeroCard/HeroCard"
import { Form } from "../components/Form/Form"

export const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <HeroCard  text="Contact Us" PageLink="/contact" PageName="Contact" />
            <Counter />
            <Form />

        </div>
    )
}