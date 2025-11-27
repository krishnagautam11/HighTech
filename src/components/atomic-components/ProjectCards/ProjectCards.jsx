import project1 from "../../../images/project1.jpg";
import project2 from "../../../images/project2.jpg";
import project3 from "../../../images/project3.jpg";
import project4 from "../../../images/project4.jpg";
import project5 from "../../../images/project5.jpg";
import project6 from "../../../images/project6.jpg";

import useFadeOnScroll from "../ScrollAnimation/useFadeOnScroll"

export const ProjectCards = () => {

    useFadeOnScroll();

    return (
        <div className="project-section">
            <div className="project-content">
                <div className="project-title text-center pb-8 scroll-aimate" data-anim="fade-in" data-delay="0.3s">
                    <h5 className="cards-h5">Our Project</h5>
                    <h2 className="cards-h2 pb-5">Our Recently Completed Projects</h2>
                </div>

                <div className="project-cards custom-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="project-card rounded-xl scroll-animate" data-anim="fade-in" data-delay="0.3s">
                        <img src={project1} alt="" />
                        <div className="project-card-text">
                            <a href="">
                                <h4 className="cards-h4 mb-5">Web Design</h4>
                                <p className="cards-p">Web Analysis</p>
                            </a>
                        </div>
                    </div>

                    <div className="project-card rounded-xl scroll-animate" data-anim="fade-in" data-delay="0.4s">
                        <img src={project2} alt="" />
                        <div className="project-card-text">
                            <a href="">
                                <h4 className="cards-h4 mb-5">Cyber Secruity</h4>
                                <p  className="cards-p">Cyber Security Core</p>
                            </a>
                        </div>
                    </div>

                    <div className="project-card rounded-xl scroll-animate"  data-anim="fade-in" data-delay="0.5s">
                        <img src={project3} alt="" />
                        <div className="project-card-text">
                            <a href="">
                                 <h4 className="cards-h4 mb-5">Mobile Info</h4>
                                <p  className="cards-p">Upcoming Phone</p>
                            </a>
                        </div>
                    </div>

                    <div className="project-card rounded-xl scroll-animate"  data-anim="fade-in" data-delay="0.3s">
                        <img src={project4} alt="" />
                        <div className="project-card-text">
                            <a href="">
                                 <h4 className="cards-h4 mb-5">Web Development</h4>
                                <p  className="cards-p">Web Analysis</p>
                            </a>
                        </div>
                    </div>

                    <div className="project-card rounded-xl scroll-animate"  data-anim="fade-in" data-delay="0.4s">
                        <img src={project5} alt="" />
                        <div className="project-card-text">
                            <a href="">
                                <h4 className="cards-h4 mb-5">Digital Marketing</h4>
                                <p  className="cards-p">Marketing Analysis</p>
                            </a>
                        </div>
                    </div>

                    <div className="project-card rounded-xl scroll-animate"  data-anim="fade-in" data-delay="0.5s">
                        <img src={project6} alt="" />
                        <div className="project-card-text">
                            <a href="">
                                <h4 className="cards-h4 mb-5">Keyboard Research</h4>
                                <p  className="cards-p">Keyboard Analysis</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}