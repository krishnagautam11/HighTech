import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import 'animate.css';
import slideImg1 from '../../images/carousel1.jpg';
import slideImg2 from '../../images/carousel2.jpg';
import { Button } from '../Button/Button';
import useFadeOnScroll from "../ScrollAnimation/useFadeOnScroll";

export const SplideSlider = () => {
    useFadeOnScroll();

    const animateActiveSlide = (splide) => {
        document.querySelectorAll('.animate__animated').forEach((el) => {
            el.classList.remove(
                'animate__fadeIn',
                'animate__slideInLeft',
                'animate__slideInRight',
                'animate__fadeInUp',
                'animate__fadeInDown'
            );
        });

        const activeSlide = splide.Components.Slides.getAt(splide.index).slide;

        if (activeSlide) {
            setTimeout(() => {
                activeSlide.querySelectorAll('.slide-animate').forEach((el) => {
                    const anim = el.dataset.anim;
                    console.log('Applying animation:', anim);
                    el.classList.add('animate__animated', anim);
                });
            }, 1);
        }
    };

    return (
        <Splide
            aria-label="My Favorite Images"
            options={{
                type: 'loop',
                rewind: true,
                gap: '0',
                pagination: true,
                arrows: true,
                autoplay: true,
            }}
            onMounted={(splide) => animateActiveSlide(splide)}
            onMoved={(splide) => animateActiveSlide(splide)}
        >
            <SplideSlide className="splideSlider">
                <img src={slideImg1} alt="Image 1" className="splideImage" />
                <div className="splide-text">
                    <h6 className="slide-animate" data-anim="animate__fadeInUp">Best IT Solutions</h6>
                    <h1 className="display-1-h1 slide-animate" data-anim="animate__slideInRight">An Innovative IT Solutions Agency</h1>
                    <p className="display-1-p mt-5 mb-5 slide-animate" data-anim="animate__fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>

                    <div className="splide-buttons flex gap-5 justify-center items-center ">
                        <Button className="primary-button slide-animate" data-anim="animate__slideInLeft"  text="Read More" />
                        <Button className="secondary-button slide-animate" data-anim="animate__slideInRight" text="Contact Us" />
                    </div>
                </div>
            </SplideSlide>

            <SplideSlide className="splideSlider">
                <img src={slideImg2} alt="Image 2" className="splideImage" />
                <div className="splide-text">
                    <h6 className="slide-animate" data-anim="animate__fadeInUp">Best IT Solutions</h6>
                    <h1 className="display-1-h1 slide-animate" data-anim="animate__slideInLeft">Quality Digital Services You Really Need!</h1>
                    <p className="display-1-p mt-5 mb-5 slide-animate" data-anim="animate__fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>

                    <div className="splide-buttons flex gap-5 justify-center items-center">
                        <Button className="primary-button slide-animate" data-anim="animate__slideInLeft"  text="Read More" />
                        <Button className="secondary-button slide-animate" data-anim="animate__slideInRight"  text="Contact Us" />
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    );
};



