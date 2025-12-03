import { Link } from 'react-router-dom'
import useFadeOnScroll from "../ScrollAnimation/useFadeOnScroll"
// import PageBg from "../../../images/carousel1.jpg";
import 'animate.css';

export const HeroCard = ({text, PageLink, PageName}) => {
    useFadeOnScroll();

    const animationClass = "animate__fadeInDown";

    return (
        <div className="image-hero-card ">

            {/* <img src={PageBg} alt="Image 1" className="page-Bg" /> */}

            <div className="image-hero-card-text flex flex-col items-center">
                <h1 className={`animate__animated ${animationClass}`} >{text}</h1>

                <div className="image-hero-card-links flex gap-2 mt-7">
                    <p className='cards-p'><Link to="/">Home <span className='ml-1'>/</span></Link></p>
                    <p className='cards-p'><Link to="/pages">Pages <span className='ml-1'>/</span></Link></p>
                    <p className='cards-p'><Link to={PageLink}>{PageName}</Link></p>
                </div>


            </div>

        </div>
    )
}