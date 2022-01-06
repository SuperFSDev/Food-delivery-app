import React from 'react';

const NearFood = () => {
    return (
        <>
        <section className="_food_near_wrapper">
            <div className="_food_near_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-6">
                            <h2 className="_food_near_title">Food near me <img src="assets/img/fire.svg" alt="fire" className="_fire_img" /> </h2>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="_food_near_slide_nav">
                                <button className="_slide_btn _prev_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" fill="none" viewBox="0 0 7 12">
                                        <path stroke="#C4C4C4" strokeWidth="2" d="M6 1L1.5 5.75 6 10.5"/>
                                    </svg>                                  
                                </button>
                                <button className="_slide_btn _right_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" fill="none" viewBox="0 0 7 12">
                                        <path stroke="#C4C4C4" strokeWidth="2" d="M1 1l4.5 4.75L1 10.5"/>
                                    </svg>                                  
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="_food_near_content_wrap">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="_food_near_content">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="_food_near_content_txt">
                                                <h4 className="_food_near_content_title">Pizza</h4>
                                                <p className="_food_near_content_detail">
                                                    Starting
                                                    <span className="_detail_clr">
                                                        $14.00
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="_food_near_content_img">
                                                <img src="assets/img/pizza.png" alt="Food Image" className="_food_img _food_img1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="_food_near_content">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="_food_near_content_txt">
                                                <h4 className="_food_near_content_title">Drinks</h4>
                                                <p className="_food_near_content_detail">
                                                    Starting
                                                    <span className="_detail_clr">
                                                        $2.00
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="_food_near_content_img">
                                                <img src="assets/img/drinks.png" alt="Food Image" className="_food_img _food_img2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="_food_near_content">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="_food_near_content_txt">
                                                <h4 className="_food_near_content_title">F. Chiken</h4>
                                                <p className="_food_near_content_detail">
                                                    Starting
                                                    <span className="_detail_clr">
                                                        $4.50
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="_food_near_content_img">
                                                <img src="assets/img/chicken.png" alt="Food Image" className="_food_img _food_img3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="_food_near_content">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="_food_near_content_txt">
                                                <h4 className="_food_near_content_title">French F.</h4>
                                                <p className="_food_near_content_detail">
                                                    Starting
                                                    <span className="_detail_clr">
                                                        $8.00
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="_food_near_content_img">
                                                <img src="assets/img/fries.png" alt="Food Image" className="_food_img _food_img4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default NearFood;