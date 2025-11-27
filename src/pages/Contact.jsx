import { Counter } from "../components/atomic-components/Counter/Counter"
import { HeroCard } from "../components/atomic-components/HeroCard/HeroCard"
import { Form } from "../components/atomic-components/Form/Form"

export const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <HeroCard />
            <Counter />
            <Form />

        </div>
    )
}