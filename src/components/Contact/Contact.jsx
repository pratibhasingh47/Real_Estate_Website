import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left*/}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText">
                        We always ready to help by providijng the best services
                        for you. <br />
                        We beleive a good blace to live can make your life
                        better
                    </span>

                    <div className="flexStart row">
                        <div className="flexColStart Contactmodes">
                            <div className="flexStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexStart icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">
                                                Call
                                            </span>
                                            <span className="secondaryText">
                                                123 456 789 XXX
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Call Now
                                    </div>
                                </div>

                                {/* ---- */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexStart icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">
                                                Chat
                                            </span>
                                            <span className="secondaryText">
                                                123 456 789 XXX
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Chat Now
                                    </div>
                                </div>
                            </div>

                            {/* SECOND-ROW */}

                            <div className="flexStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexStart icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">
                                                {" "}
                                                VideoCall
                                            </span>
                                            <span className="secondaryText">
                                                123 456 789 XXX
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Video Call Now
                                    </div>
                                </div>

                                {/* ---- */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexStart icon">
                                            <HiChatBubbleBottomCenter
                                                size={25}
                                            />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">
                                                Message
                                            </span>
                                            <span className="secondaryText">
                                                123 456 789 XXX
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Message Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
