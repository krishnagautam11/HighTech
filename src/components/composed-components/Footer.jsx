import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {

    return (
        <div className='footer '>
            <div className="footer-content custom-container pt-5 pb-4">
                <div className="footer-upper-section flex flex-col lg:flex-row">
                    <div className="footer-details lg:w-80">
                        <div className="footer-text">
                            <h3>High<span>Tech</span></h3>

                            <div className="footer-description mt-5 mb-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                            </div>
                        </div>

                        <div className="footer-socials flex gap-2 ">
                            <a href=""><FontAwesomeIcon className='social-icons' icon={faFacebookF} /></a>
                            <a href=""><FontAwesomeIcon className='social-icons' icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon className='social-icons' icon={faInstagram} /></a>
                            <a href=""><FontAwesomeIcon className='social-icons' icon={faLinkedinIn} /></a>
                        </div>


                    </div>

                    <div className="footer-links lg:w-80">
                        <h2><span>Short Link</span></h2>
                        <div className="footer-link mt-5">
                            <p className='mb-2'><a href="" > <FontAwesomeIcon icon={faAngleRight} /> About us </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Contact us </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Our Services </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Our Projects </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Latest Blog </a></p>
                        </div>
                    </div>

                    <div className="footer-links lg:w-80">
                        <h2><span>Help Link</span></h2>
                        <div className="footer-link mt-5">
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Terms of use </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Privacy Policy </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Helps </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> FAQs </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Contact </a></p>
                        </div>
                    </div>

                    <div className="footer-links lg:w-80">
                        <div className="contact-links">
                            <h2><span>Contact Us</span></h2>
                            <div className="contact-link mt-5">
                                <p className='pb-3'><a href="" > <FontAwesomeIcon icon={faLocationDot} className='me-2' /> 123 Street, New York, USA</a></p>
                                <p className='py-3'><a href=""> <FontAwesomeIcon icon={faPhone} className='me-2' /> +123 456 7890</a></p>
                                <p className='py-3'><a href=""> <FontAwesomeIcon icon={faEnvelope} className='me-2' /> info@exmple.com</a></p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="footer-below-section">
                    <p>&copy; Your Site Name, All right reserved.</p>
                    <p>Designed ByHTML Codex Distributed By ThemeWagon</p>
                </div>

            </div>
        </div>
    )
}