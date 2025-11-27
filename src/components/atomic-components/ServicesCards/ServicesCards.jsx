import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFile, faEnvelopeOpen, faDesktop, faUserSecret, faMobileScreen } from "@fortawesome/free-solid-svg-icons";


import { Button } from "../Button/Button"

import useFadeOnScroll from "../ScrollAnimation/useFadeOnScroll"

export const ServicesCards = () => {

    useFadeOnScroll();

    return (
        <div className="services-section">
            <div className="services-content">
                <div className="services-title text-center pb-8 scroll-animate" data-anim="fade-in" data-delay="0.3s">
                    <h5 className="cards-h5">Our Services</h5>
                    <h2 className="cards-h2 pb-5">Services Built Specifically For Your Business</h2>
                </div>
                <div className="services-cards custom-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="services-card rounded-xl scroll-animate " data-anim="fade-in" data-delay="0.3s">
                        <FontAwesomeIcon icon={faCode} />
                        <h4 className="mb-3 mt-5 cards-h4">Web Design</h4>
                        <p className="cards-p mb-6">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button mb-3" text="Read More" />
                    </div>

                    <div className="services-card rounded-xl scroll-animate" data-anim="fade-in" data-delay="0.4s">
                        <FontAwesomeIcon icon={faFile} />
                        <h4 className="mb-3 mt-5 cards-h4">Web Development</h4>
                        <p className="cards-p mb-6"> Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button mb-3" text="Read More" />
                    </div>

                    <div className="services-card rounded-xl scroll-animate" data-anim="fade-in" data-delay="0.5s">
                        <FontAwesomeIcon icon={faMobileScreen} />

                        <h4 className="mb-3 mt-5 cards-h4 " >UI/UX Design</h4>
                        <p className="cards-p mb-6">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button mb-3" text="Read More" />
                    </div>

                    <div className="services-card rounded-xl scroll-animate" data-anim="fade-in" data-delay="0.3s">
                        <FontAwesomeIcon icon={faUserSecret} />
                        <h4 className="mb-3 mt-5 cards-h4">Web Security</h4>
                        <p className="cards-p mb-6">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button mb-3" text="Read More" />
                    </div>

                    <div className="services-card rounded-xl scroll-animate" data-anim="fade-in" data-delay="0.4s">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                        <h4 className="mb-3 mt-5 cards-h4">Digital Marketing</h4>
                        <p className="cards-p mb-6">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button mb-3" text="Read More" />
                    </div>

                    <div className="services-card rounded-xl scroll-animate" data-anim="fade-in" data-delay="0.5s">
                        <FontAwesomeIcon icon={faDesktop} />
                        <h4 className="mb-3 mt-5 cards-h4">Programming</h4>
                        <p className="cards-p mb-6">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button mb-3" text="Read More" />
                    </div>
                </div>

            </div>

        </div>
    )
}