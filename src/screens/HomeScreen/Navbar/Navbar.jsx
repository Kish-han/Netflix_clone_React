import React, { useEffect, useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 50) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    // useEffect(() => {
        //     return () => window.removeEventListener('scroll', transitionNavBar);
        // }, []);
            window.addEventListener("scroll", transitionNavBar);

    return (
        <nav className={`nav ${show && "nav__black"}`} >
            <div className="nav__content">
                <div className='nav__logo__container'>
                    <img className='nav__logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Logo" />
                </div>
                <div className='nav__avatar__container'>
                    <img className='nav__avatar' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar