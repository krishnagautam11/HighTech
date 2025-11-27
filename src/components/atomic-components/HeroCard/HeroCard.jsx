import { Link } from 'react-router-dom'
// import PageBg from "../../../images/carousel1.jpg";

export const HeroCard = () => {
    return (
        <div className="image-hero-card ">

            {/* <img src={PageBg} alt="Image 1" className="page-Bg" /> */}

            <div className="image-hero-card-text flex flex-col items-center">
                <h1>About Us</h1>

                <div className="image-hero-card-links flex gap-2 mt-7">
                    <p className='cards-p'><Link to="/">Home <span className='ml-1'>/</span></Link></p>
                    <p className='cards-p'><Link to="/pages">Pages <span className='ml-1'>/</span></Link></p>
                    <p className='cards-p'><Link to="/about">About</Link></p>
                </div>


            </div>

        </div>
    )
}