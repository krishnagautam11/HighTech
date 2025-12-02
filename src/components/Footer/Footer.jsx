import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {

    return (
        <div className='footer scroll-animate' data-anim="fade-in" data-delay="0.3s">
            <div className="footer-content custom-container pt-5 pb-4">
                <div className="footer-upper-section mt-2 pt-5 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
                    <div className="footer-details md:w-96 lg:w-80">
                        <div className="footer-text">
                            {/* <h3>High<span>Tech</span></h3> */}
                            <Link to="/">
                                {/* <h3>High<span>Tech</span></h3> */}
                                <img src={logo} alt="" />
                            </Link>

                            <div className="footer-description mt-5 mb-4">
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

                    <div className="footer-links md:w-48 lg:w-80">
                        <h2><span>Short Link</span></h2>
                        <div className="footer-link mt-5">
                            <p className='mb-2'><Link to="/about" > <FontAwesomeIcon icon={faAngleRight} /> About us </Link></p>
                            <p className='mb-2'><Link to="/contact"> <FontAwesomeIcon icon={faAngleRight} /> Contact us </Link></p>
                            <p className='mb-2'><Link to="/services"> <FontAwesomeIcon icon={faAngleRight} /> Our Services </Link></p>
                            <p className='mb-2'><Link to="/projects"> <FontAwesomeIcon icon={faAngleRight} /> Our Projects </Link></p>
                            <p className='mb-2'><Link to="/blog"> <FontAwesomeIcon icon={faAngleRight} /> Latest Blog </Link></p>
                        </div>
                    </div>

                    <div className="footer-links md:w-96 lg:w-80">
                        <h2><span>Help Link</span></h2>
                        <div className="footer-link mt-5">
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Terms of use </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Privacy Policy </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Helps </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> FAQs </a></p>
                            <p className='mb-2'><a href=""> <FontAwesomeIcon icon={faAngleRight} /> Contact </a></p>
                        </div>
                    </div>

                    <div className="footer-links md:w-64 lg:w-80">
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



                <div className="footer-below-section text-center py-6 flex flex-col lg:flex-row justify-between">
                    <p><span>&copy; Your Site Name,</span> All right reserved.</p>
                    <p>Designed By<span>HTML Codex</span> Distributed By <span className='span-blue'>ThemeWagon</span></p>
                </div>

            </div>
        </div>
    )
}