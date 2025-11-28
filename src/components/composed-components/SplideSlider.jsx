import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import slideImg1 from '../../images/carousel1.jpg'
import slideImg2 from '../../images/carousel2.jpg'
import { Button } from '../atomic-components/Button/Button';



export const SplideSlider = () => {
    return (
        <>
            <Splide aria-label="My Favorite Images"
                options={{
                    type: 'loop',
                    rewind: true,
                    // perPage: 2,
                    gap: '0',
                    pagination: true,
                    arrows: true,
                    autoplay: true,
                    // autoScroll: {   
                    //     pauseOnHover: true,
                    //     pauseOnFocus: false,
                    //     speed: 2,
                    // },

                }}
                onMove={(splide, newIndex, oldIndex) => {
                    const slides = document.querySelectorAll('.splide__slide');

                    // Remove animations from all slides first
                    slides.forEach(slide => {
                        slide.querySelectorAll('.scroll-animate').forEach(el => {
                            el.classList.remove('fade-in', 'slide-up');
                        });
                    });

                    // Get the current active slide
                    const activeSlide = slides[newIndex];
                    if (activeSlide) {
                        // Add the animation with a delay to ensure it's after the slide change
                        setTimeout(() => {
                            activeSlide.querySelectorAll('.scroll-animate').forEach(el => {
                                el.classList.add('slide-up'); // Trigger animation here
                            });
                        }, 100);  // Adjust the delay if needed
                    }
                }}


            // renderControls={() => (
            //     <div className="splide-arrows">
            //         <button className="splide_arrow--prev">

            //             <span>&lt;</span>
            //         </button>
            //         <button className="splide_arrow--next">

            //            <span>&gt;</span>
            //         </button>
            //     </div>
            // )}
            >
                <SplideSlide className="splideSlider">
                    <img src={slideImg1} alt="Image 1" className="splideImage" />
                    <div className="splide-text">
                        <h6 className='slide-up scroll-animate'>Best IT Solutions</h6>
                        <h1 className='display-1-h1 slide-left scroll-animate'>An Innovative IT Solutions Agency</h1>
                        <p className='display-1-p mt-5 mb-5 slide-down scroll-animate'>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>

                        <div className="splide-buttons flex gap-5 justify-center items-center">
                            <Button className="primary-button" text="Read More" />
                            <Button className="secondary-button" text="Contact Us" />
                        </div>

                    </div>
                </SplideSlide>
                <SplideSlide className="splideSlider">
                    <img src={slideImg2} alt="Image 2" className="splideImage" />

                    <div className="splide-text">
                        <h6>Best IT Solutions</h6>
                        <h1 className='display-1-h1'>Quality Digital Services You Really Need!</h1>
                        <p className='display-1-p mt-5 mb-5'>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>

                        <div className="splide-buttons flex gap-5 justify-center">
                            <Button className="primary-button" text="Read More" />
                            <Button className="secondary-button" text="Contact Us" />
                        </div>

                    </div>

                </SplideSlide>
            </Splide>
        </>
    )
}




