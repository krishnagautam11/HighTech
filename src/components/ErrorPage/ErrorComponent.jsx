import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button"
import { useNavigate } from "react-router-dom";

export const ErrorComponent = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };


    return (
        <div className="error-component-wrapper">
            <div className="error-component-content custom-container ">
                <div className="error-component-card flex flex-col items-center">
                    <FontAwesomeIcon icon={faTriangleExclamation} className='errorIcon' />
                    <h1 className=" display-1-h1 mt-3 ">404</h1>
                    <h2 className="display-1-h2  mt-1">Page Not Found</h2>
                    <p className="cards-p mt-5  text-center">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>

                    <Button className="primary-button mt-5 pt-2" text="Go Back to Home"  onClick={goHome} />
                </div>
            </div >

        </div >
    )
}