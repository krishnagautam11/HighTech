export const Counter = () => {
    return (
        <div className="counter-section">
            <div className="counter-cards custom-container flex flex-col lg:flex-row ">
                <div className="counter-card flex 991:flex-row 991:gap-4 991:p-0 991:border-0 991:text-left items-start ">
                    <h2 className="scroll-animate counter-animate" data-target="99" data-duration="3500">0</h2>
                    <p>Success in getting happy customer</p>
                </div>

                <div className="counter-card flex 991:flex-row 991:gap-4 991:p-0 991:border-0 991:text-left items-start gap-4 ">
                    <h2 className="scroll-animate counter-animate" data-target="25" data-duration="3500" >0</h2>
                    <p>Thousands of successful business</p>
                </div>
                <div className="counter-card flex 991:flex-row 991:gap-4 991:p-0 991:border-0 991:text-left items-start gap-4 ">
                    <h2 className="scroll-animate counter-animate" data-target="120" data-duration="3500">0</h2>
                    <p>Total clients who love HighTech</p>
                </div>
                <div className="counter-card flex 991:flex-row 991:gap-4 991:p-0 991:border-0 991:text-left items-start gap-4 ">
                    <h2 className="scroll-animate counter-animate" data-target="5" data-duration="3500">0</h2>
                    <p>Stars reviews given by satisfied clients</p>
                </div>
            </div>
        </div>
    )
}