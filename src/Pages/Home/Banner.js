import React from 'react';

const Banner = () => {
    return (
        <>
                <div className="_hero_food_deliver_wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="_hero_food_content">
                                    <div className="_hero_food_content_txt">
                                        <h3 className="_hero_food_content_title">Hungry?</h3>
                                        <h1 className="_hero_food_content_title2">Wait a minute for delicious.</h1>
                                        <p className="_hero_food_content_para">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 20mins.</p>
                                    </div>
                                </div>
                                <div className="_hero_food_content_input">
                                    <div className="row">
                                        <div className="col-xl-9 col-lg-11 col-md-12 col-sm-12 col-10 mx-auto ms-xl-0">
                                            <form className="_hero_food_form">
                                                <input type="text" className="_hero_food_input" placeholder="Enter your delivery location" />
                                                <span className="_icon"></span>
                                                <button className="_hero_food_input_btn">
                                                    Discover
                                                    <img src="assets/img/arrow.svg" className="_arrow_icon" alt="Icon" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="_hero_food_community">
                                    <p className="_hero_food_community_txt">Already member of our communty? <a href="#0" className="_signin_community">Sign in</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="_hero_food_deliver_img">
                                    <img src="assets/img/header-img.svg" alt="" className="_food_deliver_img img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Banner;