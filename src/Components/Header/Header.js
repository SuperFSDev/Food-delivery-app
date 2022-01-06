import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <header className="_hero_food_deliver_wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light _hero_food_navbar">
                    <div className="container">
                        <div className="_logo_wrap">
                            <Link className="navbar-brand _logo" to='/'>

                                <img src="/assets/img/logo.svg" alt="Logo" />
                            </Link>
                        </div>
                        <button className="navbar-toggler _toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav _hero_food_nav">
                                <li className="nav-item _hero_food_nav_item">
                                    <Link className="nav-link _hero_food_nav_link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item _hero_food_nav_item">
                                    <Link className="nav-link _hero_food_nav_link" to='/all-products'>All Products</Link>
                                </li>
                                <li className="nav-item _hero_food_nav_item">
                                    <Link className="nav-link _hero_food_nav_link" to='/'>Review</Link>
                                </li>
                                <li className="nav-item _hero_food_nav_item">
                                    <Link className="nav-link _hero_food_nav_link" to='/about-us'>About Us</Link>
                                </li>
                                <li className="nav-item _hero_food_nav_item">
                                    <Link className="nav-link _hero_food_nav_link" to='/contact-use'>Contact Us</Link>
                                </li>

                            </ul>
                            <ul className="navbar-nav _hero_food_nav_right">
                                <li className="nav-item _hero_food_nav_item">
                                    {
                                        user.email ? <Link className="nav-link _hero_food_nav_link _sign_up_btn" to='/dashboard' > Dashboard</Link> : ""
                                    }
                                </li>
                                <li className="nav-item _hero_food_nav_item">
                                    {
                                        user.email ? <a className="nav-link _hero_food_nav_link _sign_up_btn" onClick={logout} >  Sign Out</a> : <Link to='/login' className="nav-link _hero_food_nav_link _sign_up_btn" > Sign in</Link>
                                    }
                                </li>
                                <li className="nav-item _hero_food_nav_item">
                                    <a className="nav-link _hero_food_nav_btn _cart_btn" href="#0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path fill="#fff" d="M12 0C5.386 0 0 5.386 0 12s5.386 12 12 12 12-5.386 12-12S18.614 0 12 0zm0 5.637a2.608 2.608 0 012.595 2.596c0 .446-.39.837-.837.837a.822.822 0 01-.837-.837.93.93 0 00-.921-.921.93.93 0 00-.92.92.822.822 0 01-.838.838.822.822 0 01-.837-.837A2.608 2.608 0 0112 5.637zm6.753 6.112l-1.367 4.967c-.14.921-.92 1.647-1.87 1.647H8.484c-.95 0-1.73-.726-1.786-1.675l-1.368-4.94c-.028-.083-.028-.139-.028-.222 0-1.005.81-1.786 1.814-1.814h9.851a1.81 1.81 0 011.814 1.814c0 .083 0 .14-.027.223z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;