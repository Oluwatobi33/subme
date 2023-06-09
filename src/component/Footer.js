import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer">
                        <h3 className='ms-4'>subme<span>.com.ng</span></h3>
                        <p className='ms-4'>
                            Subme Data Services,<br />
                            Plot. 87, Opposite FRCN Gate, Kutunku,<br />
                            Gwagwalada, Abuja<br /><br /><strong>Phone:</strong> +2348108986434<br /><strong>Email:</strong> support@subme.com.ng<br />
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 footer1">
                        <h4 className='ms-4'>Useful Links</h4>
                        <ul>
                            <li>
                                <a href='#'>Home</a>
                            </li>
                            <li>
                                <a href='#'>About us</a>
                            </li>
                            <li>
                                <a href='#'>Contact Us</a>
                            </li>
                            <li>
                                <a href='#'>Terms of service</a>
                            </li>
                            <li>
                                <a href='#'>Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer1">
                        <h4 className='ms-4'>Our Products</h4>
                        <ul>
                            <li>
                                <a href='#'>Data Bundle</a>
                            </li>
                            <li>
                                <a href='#'>Airtime</a>
                            </li>
                            <li>
                                <a href='#'>Cable TV Subscription</a>
                            </li>
                            <li>
                                <a href='#'>Bill Payment</a>
                            </li>
                            <li>
                                <a href='#'>Waec Result Pin</a>
                            </li>
                            <li>
                                <a href='#'>Neco Result Token</a>
                            </li>
                            <li>
                                <a href='#'>Nabteb Result Pin</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className='ms-4'>Our Social Networks</h4>
                        <p className='ms-4'>You can follow us on any of our social media platforms for updates and information.</p>
                        {/* <div className="social-links mt-3 "> */}
                        <ul style={{ listStyleType: "none", display: "flex" }} className=' icon'>
                            <li><a href='https://twitter.com/InterswitchGRP'><FaInstagram /></a></li>
                            <li><a href='https://www.facebook.com/InterswitchGroup'><FaTwitter /></a></li>
                            <li><a href='https://www.instagram.com/interswitchgroup/?hl=en'> <FaFacebook /> </a></li>
                            <li><a href='https://www.youtube.com/user/Interswitch'><FaLinkedinIn /></a></li>
                        </ul>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <section className='section6'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12  right">
                            <p className='float-start'>© Copyright   <strong> subme </strong>.All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer