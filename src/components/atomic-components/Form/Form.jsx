import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { InputField } from "../Form/InputField";
import { MessageField } from "../Form/MessageField";
import { FormButton } from '../Button/FormButton';

export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventfault();

        const newErrors = {};

        if (!name) newErrors.name = "Enter Your FullName";
        if (!email) newErrors.email = "Enter Your Email";
        if (!project) newErrors.project = "Enter Your Email";
        else if (!/\S+@\S+\.\S+/.test(email.email))
            newErrors.email = "Enter Valid Email";
        if (!message) newErrors.message = "Enter Message";

        setError(newErrors);
        setSubmitted(true);
        setName("");
        setEmail("");
        setProject("");
        setMessage("");
    }

    return (
        <div className="contact-section">
            <div className="contact-content custom-container">
                <div className="contact-title mb-8 pb-7 text-center">
                    <h5 className="cards-h5 ">Get In Touch</h5>
                    <h2 className="cards-h2 mt-1">Contact for any query</h2>
                    <p className="cards-p ">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now.</p>
                </div>

                <div className="contact-form-section custom-container  ">
                    <div className="contact-form-content">
                        <div className="contact-form-details mb-8 pb-4 flex 320:flex-col 320:flex-col 991:flex-row justify-between">
                            <div className="contact-form-link 320:w-full 320:mb-8 lg:w-80 lg:mb-0 p-4 flex gap-5 rounded-lg">
                                <p><a href="" > <FontAwesomeIcon icon={faLocationDot} className='me-2 social-icons' /></a></p>

                                <a href="">
                                    <div className="contact-form-text flex flex-col gap-5">
                                        <h4 className="cards-h4 pt-2">Address</h4>
                                        <h5 className="cards-h5">123 Street, NY</h5>
                                    </div>
                                </a>


                            </div>

                            <div className="contact-form-link 320:w-full 320:mb-8 320:mt-4  lg:w-80 lg:mb-0 lg:mt-0 p-4 flex gap-5 rounded-lg">
                                <p><a href=""> <FontAwesomeIcon icon={faPhone} className='me-2 social-icons' /></a></p>

                                <a href="">
                                    <div className="contact-form-text flex flex-col gap-5">
                                        <h4 className="cards-h4 pt-2">Call Us</h4>
                                        <h5 className="cards-h5">+012 3456 7890</h5>
                                    </div>
                                </a>


                            </div>

                            <div className="contact-form-link 320:w-full 320:mt-4  lg:w-80 lg:mb-0 lg:mt-0 p-4 flex gap-5 rounded-lg">
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
                            <div className="contact-map rounded-lg">
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

                            <div className="form rounded-lg">
                                <form action="">
                                    <>
                                        <div className="">
                                            <InputField
                                                // label="Full Name *"
                                                type="text"
                                                placeholderText="Your Full Name"
                                                value={name || ""}
                                                inputValue={(e) => setName(e.target.value)}
                                                error={error.fullName}
                                            />

                                            <InputField
                                                // label="Email *"
                                                type="email"
                                                placeholderText="Your Email"
                                                value={email || ""}
                                                inputValue={(e) => setEmail(e.target.value)}
                                                error={error.email}
                                            />

                                            <InputField
                                                // label="Email *"
                                                type="email"
                                                placeholderText="Your Project Name"
                                                value={project || ""}
                                                inputValue={(e) => setProject(e.target.value)}
                                                error={error.project}
                                            />

                                            <MessageField
                                                // label="Message *"
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
    )
}