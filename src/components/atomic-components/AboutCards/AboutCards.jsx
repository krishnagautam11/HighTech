import { Button } from "../Button/Button"
import about1 from '../../../images/about1.jpg'
import about2 from '../../../images/about2.jpg'

import useFadeOnScroll from "../ScrollAnimation/useFadeOnScroll"

export const AboutCards = () => {

 useFadeOnScroll();


    return (
        <div className="about-section scroll-animate" data-anim="fade-in" data-delay="0.3s">
            <div className="about-card  custom-container flex flex-col md:flex-row ">
                <div className="about-img scroll-animate" data-anim="slide-up" data-delay="0.3s">
                    <img src={about1} alt="" />
                    <img src={about2} alt="" className="aboutImg2" />
                </div>
                <div className="about-card-text fade-element"data-delay="0.3s" >
                    <h5 className="mb-1">About Us</h5>
                    <h2>About HighTech Agency And It's Innovative IT Solutions</h2>
                    <p className="py-5 about-cards-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                    <p className="about-cards-p">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                    <Button className="primary-button mt-6" text="More Details" />
                </div>
            </div>
        </div>
    )
}