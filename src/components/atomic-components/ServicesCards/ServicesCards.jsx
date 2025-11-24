import { Button } from "../Button/Button"

export const ServicesCards = () => {
    return (
        <div className="services-section">
            <div className="services-content">
                <div className="services-title">
                    <h5>Our Services</h5>
                    <h2>Services Built Specifically For Your Business</h2>
                </div>
                <div className="services-cards">
                    <div className="serivces-card">
                        <FontAwesomeIcon icon={faCode} />
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button" text="Read More" />
                    </div>

                    <div className="serivces-card">
                        <FontAwesomeIcon icon={faFile} />
                        <h4>Web Development</h4>
                        <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button" text="Read More" />
                    </div>

                    <div className="serivces-card">
                        <i class="fi fi-sr-ui-ux"></i>
                        <h4>UI/UX Design</h4>
                        <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button" text="Read More" />
                    </div>

                    <div className="serivces-card">
                        <i class="fi fi-ts-dns-settings"></i>
                        <h4>Web Cecurity</h4>
                        <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button" text="Read More" />
                    </div>

                    <div className="serivces-card">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                        <h4>Digital Marketing</h4>
                        <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button" text="Read More" />
                    </div>

                    <div className="serivces-card">
                        <FontAwesomeIcon icon={faDesktop} />
                        <h4>Programming</h4>
                        <p>Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                        <Button className="primary-button" text="Read More" />
                    </div>
                </div>

            </div>

        </div>
    )
}