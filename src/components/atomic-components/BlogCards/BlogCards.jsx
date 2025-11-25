// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShare, faComments, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShare,
    faComments,
    faShareAlt, faArrowRight,
} from "@fortawesome/free-solid-svg-icons";


import blog1 from "../../../images/blog1.jpg";
import blog2 from "../../../images/blog2.jpg";
import blog3 from "../../../images/blog3.jpg";
import admin from "../../../images/admin.jpg";

import { Button } from "../Button/Button"

export const BlogCards = () => {
    return (
        <div className="blog-section">

            <div className="blog-content">
                <div className="blog-title text-center pb-8">
                    <h5 className="cards-h5">Our Blog</h5>
                    <h2 className="cards-h2 pb-5">Latest Blog & News</h2>
                </div>
                <div className="blog-cards custom-container grid sm:grid-cols-1 991:grid-cols-2  991:justify-items-center   lg:grid-cols-3">
                    <div className="blog-card ">

                        <span className="blog-tag-text-span">Web Design</span>

                        <img src={blog1} alt="" />
                        <div className="blog-details text-center flex flex-col ">
                            <div className="blog-avatar mb-4 flex justify-center">
                                <img src={admin} alt="" className="rounded-full outline outline-white" />
                            </div>
                            <div className="blog-card-text ">
                                <h4 className="cards-h5 mb-1">By Daniel Martin</h4>
                                <span>24 March 2023</span>
                                <p className="cards-p">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>

                            <div className="blog-card-button mt-2 flex items-center justify-between">
                                <Button className="primary-button-small blog-primary-btn" text="Read More" />
                                <button className="btn primary-button-small blog-primary-btn ">Share <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>

                            <div className="blog-card-subtext mt-5 flex justify-between">
                                <p><a href=""><FontAwesomeIcon icon={faShare} /> 5324 Share</a></p>
                                <p><a href=""><FontAwesomeIcon icon={faComments} /> 5 Comments</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="blog-card ">


                        <span className="blog-tag-text-span">Development</span>

                        <img src={blog2} alt="" />
                        <div className="blog-details text-center flex flex-col ">
                            <div className="blog-avatar mb-4 flex justify-center">
                                <img src={admin} alt="" className="rounded-full outline outline-white" />
                            </div>
                            <div className="blog-card-text ">
                                <h4 className="cards-h5 mb-1">By Daniel Martin</h4>
                                <span>23 April 2023</span>
                                <p className="cards-p">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>

                            <div className="blog-card-button mt-2 flex items-center justify-between">
                                <Button className="primary-button-small blog-primary-btn" text="Read More" />
                                <button className="btn primary-button-small blog-primary-btn ">Share <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>

                            <div className="blog-card-subtext mt-5 flex justify-between">
                                <p><a href=""><FontAwesomeIcon icon={faShare} /> 5324 Share</a></p>
                                <p><a href=""><FontAwesomeIcon icon={faComments} /> 5 Comments</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="blog-card 991:col-start-1 991:col-end-3 991:mx-auto 991:w-full 991:max-w-[456px] lg:col-auto lg:mx-0 lg:max-w-full">


                        <span className="blog-tag-text-span">Mobile App</span>

                        <img src={blog3} alt="" />
                        <div className="blog-details text-center flex flex-col ">
                            <div className="blog-avatar mb-4 flex justify-center">
                                <img src={admin} alt="" className="rounded-full outline outline-white" />
                            </div>
                            <div className="blog-card-text ">
                                <h4 className="cards-h5 mb-1">By Daniel Martin</h4>
                                <span>30 January 2023</span>
                                <p className="cards-p">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>

                            <div className="blog-card-button mt-2 flex items-center justify-between">
                                <Button className="primary-button-small blog-primary-btn" text="Read More" />
                                <button className="btn primary-button-small blog-primary-btn ">Share <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>

                            <div className="blog-card-subtext mt-5 flex justify-between">
                                <p><a href=""><FontAwesomeIcon icon={faShare} /> 5324 Share</a></p>
                                <p><a href=""><FontAwesomeIcon icon={faComments} /> 5 Comments</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}