import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>For all enquiries, please send a message using below form.</p>
                </div>
            </div>
            <div className="container mb-4">
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="info-box">
                                    <i className="bx bx-map"></i>
                                    <h3>Our Address</h3>
                                    <p>Ring Road, Mohammadpur, Dhaka-1207</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box mt-4">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>text@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box mt-4">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>+88 01XXXX XXXX XX<br/>+88 01XXXX XXXX XX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form className="php-email-form">
                            <div className="row">
                                <div className="col form-group mt-3">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col form-group mt-3">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <div className="text-center mt-3 mb-4"><button className="btn-primary p-2" type="button">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;