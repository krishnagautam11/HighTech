import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "../../styles/base.css";
import HeaderDropDown from "../atomic-components/HeaderDropDown";

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 shadow-md header ${
                isScrolled ? "header--scrolled" : "header--default"
            }`}
        >
            <nav className="custom-container flex items-center desktop-navbar">

                {/* Desktop Menu */}
                <div className="desktop-nav flex items-center justify-between">
                    <NavLink to="/" className="desktop-logo">
                        <h3>High<span>Tech</span></h3>
                    </NavLink>

                    <div className="hidden lg:flex items-center nav-links">
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                        <NavLink to="/services" activeClassName="active">Services</NavLink>
                        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
                        <HeaderDropDown />
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="contact-wrapper flex items-center">
                    <div className="contact-logo me-4">
                        <FontAwesomeIcon icon={faPhone} className="phoneIcon"/>
                    </div>

                    <div className="contact-details me-4 ">
                        <p>Have any questions?</p>
                        <span>Call: + 0123 456 7890</span>
                    </div>

                    <div className="contact-search pl-2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden mobile-nav">
                    <NavLink to="/" className="text-2xl font-bold">
                        <h3>High<span>Tech</span></h3>
                    </NavLink>

                    <button
                        onClick={toggleMenu}
                        className={`focus:outline-none hamburger ${isMenuOpen ? "open" : ""}`}
                    >
                        <span className="block w-6"></span>
                        <span className="block w-6"></span>
                        <span className="block w-6"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu  lg:hidden flex flex-col space-y-4 ${isMenuOpen ? "open" : ""}`}>
                <NavLink to="/" onClick={toggleMenu} activeClassName="active" className="custom-container">Home</NavLink>
                <NavLink to="/about" onClick={toggleMenu} activeClassName="active" className="custom-container">About</NavLink>
                <NavLink to="/services" onClick={toggleMenu} activeClassName="active" className="custom-container">Services</NavLink>
                <NavLink to="/projects" onClick={toggleMenu} activeClassName="active" className="custom-container">Projects</NavLink>
                <NavLink to="/team" onClick={toggleMenu} activeClassName="active" className="custom-container">Our Team</NavLink>
                <NavLink to="/blog" onClick={toggleMenu} activeClassName="active" className="custom-container">Our Blog</NavLink>
                <NavLink to="/testimonial" onClick={toggleMenu} activeClassName="active" className="custom-container">Testimonial</NavLink>
                <NavLink to="/errorpage" onClick={toggleMenu} activeClassName="active" className="custom-container">404</NavLink>
            </div>
        </header>
    );
};




// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



// import { useAppContext } from "../../context/AppContext";
// import "../../styles/base.css";
// import HeaderDropDown from "../atomic-components/HeaderDropDown";

// export const Header = () => {
//     const { isMenuOpen, toggleMenu } = useAppContext();
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 50);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <header
//             className={`fixed w-full z-50 transition-all duration-300 shadow-md header ${isScrolled ? "header--scrolled" : "header--default"
//                 }`}
//         >
//             <nav className="custom-container flex items-center desktop-navbar">
//                 {/* Desktop Menu */}
//                 <div className="desktop-nav flex items-center justify-between">
//                     <NavLink to="/" className=" desktop-logo">
//                         <h3>High<span>Tech</span></h3>
//                     </NavLink>

//                     <div className="hidden lg:flex items-center   nav-links">
//                         <NavLink to="/" activeClassName="active">Home</NavLink>
//                         <NavLink to="/about" activeClassName="active">About</NavLink>
//                         <NavLink to="/services" activeClassName="active">Services</NavLink>
//                         <NavLink to="/projects" activeClassName="active">Projects</NavLink>
//                         <HeaderDropDown />
//                         <NavLink to="/contact" activeClassName="active">Contact</NavLink>
//                         {/* <NavLink to="/team" activeClassName="active">Our Team</NavLink>
//                     <NavLink to="/blog" activeClassName="active">Our Blog</NavLink>
//                     <NavLink to="/testimonail" activeClassName="active">Testimonal</NavLink>
//                     <NavLink to="/errorpage" activeClassName="active">404</NavLink> */}
//                     </div>
//                 </div>

                
//                     <div className="contact-wrapper flex items-center">
//                         <div className="contact-logo me-4">
//                             <FontAwesomeIcon icon={faPhone} />
//                         </div>
//                         <div className="contact-details me-4 pr-6 ">
//                             <p>Have any questions?</p>
//                             <span>Call: + 0123 456 7890</span>
//                         </div>
//                         <div className="contact-search pl-2 ">
//                             <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
//                         </div>
//                     </div>

                

//                 {/* Mobile Hamburger */}
//                 <div className="lg:hidden mobile-nav">
//                     <NavLink to="/" className="text-2xl font-bold">
//                         <h3 >High<span>Tech</span></h3>
//                     </NavLink>
//                     <button
//                         onClick={toggleMenu}
//                         className={`focus:outline-none hamburger ${isMenuOpen ? "open" : ""}`}
//                     >
//                         <span className="block w-6"></span>
//                         <span className="block w-6"></span>
//                         <span className="block w-6"></span>
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             <div className={`mobile-menu lg:hidden flex flex-col space-y-4 ${isMenuOpen ? "open" : ""}`}>
//                 <NavLink to="/" onClick={toggleMenu} activeClassName="active">Home</NavLink>
//                 <NavLink to="/about" onClick={toggleMenu} activeClassName="active">About</NavLink>
//                 <NavLink to="/services" onClick={toggleMenu} activeClassName="active">Services</NavLink>
//                 <NavLink to="/projects" onClick={toggleMenu} activeClassName="active">Projects</NavLink>
//                 <NavLink to="/team" onClick={toggleMenu} activeClassName="active">Our Team</NavLink>
//                 <NavLink to="/blog" onClick={toggleMenu} activeClassName="active">Our Blog</NavLink>
//                 <NavLink to="/testimonial" onClick={toggleMenu} activeClassName="active">Testimonial</NavLink>
//                 <NavLink to="/errorpage" onClick={toggleMenu} activeClassName="active">404</NavLink>
//             </div>
//         </header>
//     );
// };
