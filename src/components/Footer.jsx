import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <img className="footer-logo" src="./images/Logo.svg" alt="" />
                    <p>It is a long established fact that a reader <br /> will be distracted lookings.</p>
                    <div className="footer-social-media">
                        <img src="./images/facebook.png" alt="" />
                        <img src="./images/twitter.png" alt="" />
                        <img src="./images/linkedin.png" alt="" />
                        <img src="./images/instagram.png" alt="" />
                    </div>
                </div>
                <div className="footer-list">
                    <div className="footer-list-sar">
                        <div className="footer-list-top"><div><Link>Pages</Link></div></div>

                        <div className="footer-list-bottom">
                            <div>
                                <Link>About Us</Link>
                            </div>
                            <div>
                                <Link>Our Projects</Link>
                            </div>
                            <div>
                                <Link>Our Team</Link>
                            </div>
                            <div>
                                <Link>Contact Us</Link>
                            </div>
                            <div>
                                <Link>Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-list-sar">
                        <div className="footer-list-top"><Link>Services</Link></div>

                        <div className="footer-list-bottom">
                            <div>
                                <Link>Kitchan</Link>
                            </div>
                            <div>
                                <Link>Living Area</Link>
                            </div>
                            <div>
                                <Link>Bathroom</Link>
                            </div>
                            <div>
                                <Link>Dinning Hall</Link>
                            </div>
                            <div>
                                <Link>Bedroom</Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-list-sar">
                        <div className="footer-list-top"><Link>Contact</Link></div>

                        <div className="footer-list-bottom">
                            <div>
                                <Link>55 East Birchwood Ave. Brooklyn, New York 11201 <br /> contact@interno.com</Link>
                            </div>
                            <div>
                                <Link>(123) 456 - 7890</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</div>
            </div>
        </div>
    )
}

export default Footer