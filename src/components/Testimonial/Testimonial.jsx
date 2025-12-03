import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

import testimonial1 from '../../images/testimonial1.jpg';
import testimonial2 from '../../images/testimonial2.jpg';
import testimonial3 from '../../images/testimonial3.jpg';
import testimonial4 from '../../images/testimonial4.jpg';
import useFadeOnScroll from "../ScrollAnimation/useFadeOnScroll"

export const Testimonial = () => {

    useFadeOnScroll();

    return (
        <div className="testimonial-section">
            <div className="testimonial-content">
                <div className="testimonial-title text-center scroll-animate" data-anim="fade-in" data-delay="0.3s">
                    <h5 className="cards-h5">Our testimonial</h5>
                    <h2 className="cards-h2 pb-5">Our Client Saying!</h2>
                </div>

                <div className="testimonial-slider custom-container sm:pt-8 mt-8 991:pt-0 scroll-animate" data-anim="fade-in" data-delay="0.3s">

                    <Splide
                        aria-label="testimonial Images"
                        options={{
                            type: 'loop',
                            perPage: 3,

                            breakpoints: {

                                768: {
                                    perPage: 1,



                                },
                                991: {
                                    perPage: 2,



                                },
                                1024: {
                                    perPage: 3,


                                },


                            },
                            focus: 'center',

                            pagination: true,
                            arrows: false,
                            rewind: true,
                            autoplay: true
                            //   interval:5000

                        }}

                        renderControls={() => (
                            <div className="splide__arrows custom-arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>

                                <button className="splide__arrow splide__arrow--next">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        )}

                        className="scroll-animate" data-anim="fade-in" data-delay="0.3s"
                    >


                        <SplideSlide className="testimonial-splideSlider flex flex-col justify-center items-center" >
                            <div className="testimonial-slider-content p-6">
                                <div className="testimonial-slider-slides flex gap-5 items-center">
                                    <div className="testimonial-spildeImg ">
                                        <img src={testimonial4} alt="Naomi Bella" className="testimonial-splideImage" />
                                    </div>

                                    <div className="testimonial-splide-text flex flex-col ms-1 justify-center">
                                        <h5 className='cards-h4'>Tobby Maguire</h5>
                                        <p className='cards-p mt-1'> Taj Hotel - Owner</p>
                                        <div className="testimonial-ratings flex gap-1 mt-5">
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                        </div>
                                    </div>

                                </div>
                                <div className="testimonial-description mt-4 pt-3">
                                    <p className='cards-p'>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="testimonial-splideSlider flex flex-col justify-center items-center">
                            <div className="testimonial-slider-content p-6">
                                <div className="testimonial-slider-slides flex gap-5 items-center">
                                    <div className="testimonial-spildeImg ">
                                        <img src={testimonial1} alt="Naomi Bella" className="testimonial-splideImage" />
                                    </div>

                                    <div className="testimonial-splide-text flex flex-col ms-1 justify-center">
                                        <h5 className='cards-h4'>Swalina Surnain</h5>
                                        <p className='cards-p mt-1'>Barista Cafe - Owner</p>
                                        <div className="testimonial-ratings flex gap-1 mt-5">
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                        </div>
                                    </div>

                                </div>
                                <div className="testimonial-description mt-4 pt-3">
                                    <p className='cards-p'>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="testimonial-splideSlider flex flex-col justify-center items-center">
                            <div className="testimonial-slider-content p-6">
                                <div className="testimonial-slider-slides flex gap-5 items-center">
                                    <div className="testimonial-spildeImg ">
                                        <img src={testimonial2} alt="Naomi Bella" className="testimonial-splideImage" />
                                    </div>

                                    <div className="testimonial-splide-text flex flex-col ms-1 justify-center">
                                        <h5 className='cards-h4'>Milind Soman</h5>
                                        <p className='cards-p mt-1'>Paytm CEO</p>
                                        <div className="testimonial-ratings flex gap-1 mt-5">
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                        </div>
                                    </div>

                                </div>
                                <div className="testimonial-description mt-4 pt-3">
                                    <p className='cards-p'>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="testimonial-splideSlider flex flex-col justify-center items-center">
                            <div className="testimonial-slider-content p-6">
                                <div className="testimonial-slider-slides flex gap-5 items-center">
                                    <div className="testimonial-spildeImg ">
                                        <img src={testimonial3} alt="Naomi Bella" className="testimonial-splideImage" />
                                    </div>

                                    <div className="testimonial-splide-text flex flex-col ms-1 justify-center">
                                        <h5 className='cards-h4'>Lopa Levis</h5>
                                        <p className='cards-p mt-1'>Levis Fashion - Owner</p>
                                        <div className="testimonial-ratings flex gap-1 mt-5">
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                            <FontAwesomeIcon icon={faStar} className='testimonial-rating' />
                                        </div>
                                    </div>

                                </div>
                                <div className="testimonial-description mt-4 pt-3">
                                    <p className='cards-p'>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                        </SplideSlide>

                    </Splide>
                </div>
            </div>
        </div>
    );
};
