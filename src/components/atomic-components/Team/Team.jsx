import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import team1 from '../../../images/team1.jpg';
import team2 from '../../../images/team2.jpg';
import team3 from '../../../images/team3.jpg';
import team4 from '../../../images/team4.jpg';

export const Team = () => {
    return (
        <div className="team-section">
            <div className="team-content">
                <div className="team-title text-center">
                    <h5 className="cards-h5">Our Team</h5>
                    <h2 className="cards-h2 pb-5">Meet our expert Team</h2>
                </div>

                <div className="team-slider custom-container">

                    <Splide
                        aria-label="Team Images"
                        options={{
                            type: 'loop',
                            perPage: 3,
                            breakpoints: {
                                1024: {
                                    perPage: 3,
                                },
                                768: {
                                    perPage: 2,
                                },
                                480: {
                                    perPage: 1,
                                },
                            },
                            focus: 'center',
                            gap: '62px',
                            pagination: true,
                            arrows: true,
                            rewind: true,
                            autoplay: false,
                        }}
                    >


                        <SplideSlide className="team-splideSlider flex flex-col justify-center items-center">
                            <div className="team-slider-content">
                                <div className="team-slider-slides flex flex-col justify-center items-center">
                                    <div className="team-spildeImg flex justify-center items-center">
                                        <img src={team2} alt="Naomi Bella" className="team-splideImage" />
                                    </div>

                                    <div className="team-splide-text text-center flex flex-col justify-center mt-6">
                                        <h5 className='cards-h4'>Chris Hemsworth</h5>
                                        <p className='cards-p mt-1'>Backend Developer</p>
                                        <div className="team-socials flex gap-3 mt-5">
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faFacebookF} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faTwitter} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faInstagram} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faLinkedinIn} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="team-splideSlider flex flex-col justify-center items-center">
                            <div className="team-slider-content">
                                <div className="team-slider-slides flex flex-col justify-center items-center">
                                    <div className="team-spildeImg flex justify-center items-center">
                                        <img src={team3} alt="Naomi Bella" className="team-splideImage" />
                                    </div>

                                    <div className="team-splide-text text-center flex flex-col justify-center mt-6">
                                        <h5 className='cards-h4'>Naomi Bella</h5>
                                        <p className='cards-p mt-1'>Frontend Developer</p>
                                        <div className="team-socials flex gap-3 mt-5">
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faFacebookF} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faTwitter} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faInstagram} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faLinkedinIn} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="team-splideSlider flex flex-col justify-center items-center">
                            <div className="team-slider-content">
                                <div className="team-slider-slides flex flex-col justify-center items-center">
                                    <div className="team-spildeImg flex justify-center items-center">
                                        <img src={team1} alt="Naomi Bella" className="team-splideImage" />
                                    </div>

                                    <div className="team-splide-text text-center flex flex-col justify-center mt-6">
                                        <h5 className='cards-h4'>Monica Vantur</h5>
                                        <p className='cards-p mt-1'>Project Manager</p>
                                        <div className="team-socials flex gap-3 mt-5">
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faFacebookF} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faTwitter} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faInstagram} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faLinkedinIn} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="team-splideSlider flex flex-col justify-center items-center">
                            <div className="team-slider-content">
                                <div className="team-slider-slides flex flex-col justify-center items-center">
                                    <div className="team-spildeImg flex justify-center items-center">
                                        <img src={team4} alt="Naomi Bella" className="team-splideImage" />
                                    </div>

                                    <div className="team-splide-text text-center flex flex-col justify-center mt-6">
                                        <h5 className='cards-h4'>Nilson Vadon</h5>
                                        <p className='cards-p mt-1'>Mobile App Developer</p>
                                        <div className="team-socials flex gap-3 mt-5">
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faFacebookF} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faTwitter} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faInstagram} /></a>
                                            <a href="#"><FontAwesomeIcon className='social-icons' icon={faLinkedinIn} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>

                    </Splide>
                </div>
            </div>
        </div>
    );
};
