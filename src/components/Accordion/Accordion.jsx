import { useState } from 'react';
import AccordionItem from './AccordionItem'

export const FaqList =
    [

        {
            key: 1,
            title: 'What do we do?',
            data: `We build projects and provide other facilities to the companies looking for it.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'How to contact HighTech IT solutions for projects?',
            data: `For contacting, look for 'Contact Us' page and fill the form. Our company will shortly reach to you.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'What type of services do HighTech IT provides?',
            data: `We provide various services to users such as Web Development, Digital Marketing, UI/UX design, Web Security and Programming.`,
            isOpen: false
        },
    ];



export default function Accordion() {


    const [accordions, setAccordion] = useState([FaqList]);

    const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };

    return (
        <div className='accordion-section'>

            <div className="p-2 m-8 custom-container accordion flex flex-col gap-4 ">
                <h2 className='cards-h2'>Frequently Asked Questions (FAQs)</h2>

                {accordions.map((accordion) => (
                    <AccordionItem
                        key={accordion.key}
                        title={accordion.title}
                        data={accordion.data}
                        isOpen={accordion.isOpen}
                        toggleAccordion={() => toggleAccordion(accordion.key)}
                    />
                ))}
            </div>

            {/* <div className="p-2 m-8 accordion">
                <h2 className='  '>Frequently Asked Questions(FAQs)</h2>
                {accordions.map((accordion) => (
                    <AccordionItem
                        key={accordion.key}
                        title={accordion.title}
                        data={accordion.data}
                        isOpen={accordion.isOpen}
                        toggleAccordion={() => toggleAccordion(accordion.key)}
                    />
                ))}
            </div> */}
        </div>
    );
}

