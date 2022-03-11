import { Card } from '../components/Card';
import './LandingPage.css';

import ProfilePic from '../assets/image-jeremy.png';

export function LandingPage () {

    return(

        <>
        
            {/* te amo */}

            <section className="content">

                <div className="content-container container">

                    <div className="report-container">

                        <div className="name-container">

                            <div className="name-img-container">
                                <img src={ProfilePic} className="name-img"></img>
                            </div>

                            <div className="name-description">
                                <p className="name-description-report">Report for</p>
                                <p className="name-name">Jeremy Robson</p>
                            </div>

                        </div>

                        <div className="period-container">

                            <p className="period-item">Daily</p>
                            <p className="period-item">Weekly</p>
                            <p className="period-item">Monthly</p>

                        </div>

                    </div>

                        <div className="card-item">

                            <div className="card-item-container">

                                <div className="card-header">
                                    <p>Work</p>
                                    <div className="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card-hours">
                                    <p className="total-hours">32hrs</p>
                                    <p className="last-week-hours"> Last Week - 36hrs</p>
                                </div>

                            </div>

                        </div>
                        <div className="card-item">

                            <div className="card-item-container">

                                <div className="card-header">
                                    <p>Play</p>
                                    <div className="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card-hours">
                                    <p className="total-hours">10hrs</p>
                                    <p className="last-week-hours"> Last Week - 8hrs</p>
                                </div>

                            </div>

                        </div>
                        <div className="card-item">

                            <div className="card-item-container">

                                <div className="card-header">
                                    <p>Study</p>
                                    <div className="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card-hours">
                                    <p className="total-hours">4hrs</p>
                                    <p className="last-week-hours"> Last Week - 7hrs</p>
                                </div>

                            </div>

                        </div>
                        <div className="card-item">

                            <div className="card-item-container">

                                <div className="card-header">
                                    <p>Exercise</p>
                                    <div className="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card-hours">
                                    <p className="total-hours">4hrs</p>
                                    <p className="last-week-hours"> Last Week - 5hrs</p>
                                </div>

                            </div>

                        </div>
                        <div className="card-item">

                            <div className="card-item-container">

                                <div className="card-header">
                                    <p>Social</p>
                                    <div className="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card-hours">
                                    <p className="total-hours">5hrs</p>
                                    <p className="last-week-hours"> Last Week - 10hrs</p>
                                </div>

                            </div>

                        </div>
                        <div className="card-item">

                            <div className="card-item-container">

                                <div className="card-header">
                                    <p>Self Care</p>
                                    <div className="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="card-hours">
                                    <p className="total-hours">2hrs</p>
                                    <p className="last-week-hours"> Last Week - 2hrs</p>
                                </div>


                        </div>
                

                    </div>

                </div>

            </section>
        
        </>

    )

}