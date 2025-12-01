import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { InputField } from "./InputField";
import { MessageField } from "./MessageField";
import { FormButton } from '../Button/FormButton';

import useFadeOnScroll from "../ScrollAnimation/useFadeOnScroll"

export const Form = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    useFadeOnScroll();
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!name.trim()) newErrors.name = "Enter Your Full Name";
        if (!email.trim()) newErrors.email = "Enter Your Email";
        else if (!/\S+@\S+\.\S+/.test(email))
            newErrors.email = "Enter Valid Email";

        if (!project.trim()) newErrors.project = "Enter Your Project Name";
        if (!message.trim()) newErrors.message = "Enter Message";

        setError(newErrors);


        if (Object.keys(newErrors).length > 0) return;


        setSubmitted(true);


        setName("");
        setEmail("");
        setProject("");
        setMessage("");
    };


    useEffect(() => {
        if (submitted) {
          
            document.body.classList.add('no-scroll');
        } else {
          
            document.body.classList.remove('no-scroll');
        }
        
        
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [submitted]);

    
    return (


        <>

            {submitted && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <button className="popup-close-btn"
                            onClick={() => setSubmitted(false)}
                        >
                            ×
                        </button>

                        <h3>Thank you!</h3>
                        <p>Your message has been sent successfully.</p>
                    </div>
                </div>
            )}

            <div className="contact-section">
                <div className="contact-content custom-container">
                    <div className="contact-title mb-8 pb-7 text-center scroll-animate" data-anim="fade-in" data-delay="0.3s">
                        <h5 className="cards-h5 ">Get In Touch</h5>
                        <h2 className="cards-h2 mt-1">Contact for any query</h2>
                        <p className="cards-p pt-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form"> Download Now.</a></p>
                    </div>

                    <div className="contact-form-section custom-container  ">
                        <div className="contact-form-content scroll-animate" data-anim="fade-in" data-delay="0.3s">
                            <div className="contact-form-details mb-8 pb-4 flex 320:flex-col 320:flex-col 991:flex-row justify-between scroll-animate" data-anim="fade-in" data-delay="0.3s">
                                <div className="contact-form-link 320:w-full 320:mb-8 lg:w-80 lg:mb-0 p-4 flex gap-5 rounded-lg scroll-animate" data-anim="fade-in" data-delay="0.3s">
                                    <p><a href="" > <FontAwesomeIcon icon={faLocationDot} className='me-2 social-icons' /></a></p>

                                    <a href="">
                                        <div className="contact-form-text flex flex-col gap-5">
                                            <h4 className="cards-h4 pt-2">Address</h4>
                                            <h5 className="cards-h5">123 Street, NY</h5>
                                        </div>
                                    </a>


                                </div>

                                <div className="contact-form-link 320:w-full 320:mb-8 320:mt-4  lg:w-80 lg:mb-0 lg:mt-0 p-4 flex gap-5 rounded-lg scroll-animate" data-anim="fade-in" data-delay="0.4s">
                                    <p><a href=""> <FontAwesomeIcon icon={faPhone} className='me-2 social-icons' /></a></p>

                                    <a href="">
                                        <div className="contact-form-text flex flex-col gap-5">
                                            <h4 className="cards-h4 pt-2">Call Us</h4>
                                            <h5 className="cards-h5">+012 3456 7890</h5>
                                        </div>
                                    </a>


                                </div>

                                <div className="contact-form-link 320:w-full 320:mt-4  lg:w-80 lg:mb-0 lg:mt-0 p-4 flex gap-5 rounded-lg scroll-animate" data-anim="fade-in" data-delay="0.5s">
                                    <p><a href=""> <FontAwesomeIcon icon={faEnvelope} className='me-2 social-icons' /></a></p>

                                    <a href="">
                                        <div className="contact-form-text flex flex-col gap-5">
                                            <h4 className="cards-h4">Email Us</h4>
                                            <h5 className="cards-h5">info@example.com</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="contact-form flex 320:flex-col 991:flex-row ">
                                <div className="contact-map rounded-lg scroll-animate" data-anim="fade-in" data-delay="0.3s">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6049.1451734293805!2d-73.829185!3d40.70541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1764155123829!5m2!1sen!2sbd"
                                        width="400"
                                        height="450"
                                        style={{ border: "0" }}
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        className='rounded-lg'>
                                    </iframe>


                                </div>

                                <div className="form rounded-lg scroll-animate" data-anim="fade-in" data-delay="0.4s">
                                    <form action="">
                                        <>
                                            <div className="">
                                                <InputField

                                                    type="text"
                                                    placeholderText="Your Full Name"
                                                    value={name || ""}
                                                    inputValue={(e) => setName(e.target.value)}
                                                    error={error.name}
                                                />

                                                <InputField

                                                    type="email"
                                                    placeholderText="Your Email"
                                                    value={email || ""}
                                                    inputValue={(e) => setEmail(e.target.value)}
                                                    error={error.email}
                                                />

                                                <InputField

                                                    type="email"
                                                    placeholderText="Your Project Name"
                                                    value={project || ""}
                                                    inputValue={(e) => setProject(e.target.value)}
                                                    error={error.project}
                                                />

                                                <MessageField

                                                    enterMessage="Message"
                                                    value={message || ""}
                                                    inputValue={(e) => setMessage(e.target.value)}
                                                />
                                            </div>

                                            <div className="">
                                                <FormButton
                                                    btnType="submit"
                                                    className="primary-button "
                                                    text="Send Message"
                                                    submitForm={handleSubmit}
                                                />
                                            </div>
                                        </>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}