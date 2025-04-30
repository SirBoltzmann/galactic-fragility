import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppItems from './AppItems.jsx';
import './Navbar.css';
import GalaxyDark from '../assets/galaxy-dark.png';


const Navbar = () => {
    const [ state, setState ] = useState(false);
    const handleClick = () => setState(!state);

    const [ showNavbar, setShowNavbar ] = useState(true);
    const [ lastScrollY, setLastScrollY ] = useState(window.scrollY);


    useEffect(() => {
        const handleScroll = () =>  {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                //scrolling down
                setShowNavbar(false);
            } else {
                //scrolling up
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [lastScrollY])


    return (
        <nav 
            className={`${state ? 'navbar-items active' : 'navbar-items'} ${showNavbar ? 'show' : 'hide'}`}
        >

            {/* Dropdown is only visible in screens greater than 950px */}
            <div className="dropdown">
                <input type="checkbox" id="dropdown"/>

                <label className="dropdown-face" htmlFor="dropdown">
                    <div className="dropdown-text">Applications</div>
                    <div className="dropdown-arrow"></div>
                </label>

                <ul className={'dropdown-items'}>
                    {AppItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <svg>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </svg>

            <div className="logo">
                <h1>Galactic Fragility</h1>
                <img className='nav-logo' src={GalaxyDark} alt="Galaxy logo" />
            </div>

            <h2 className="author-info">
                <Link className='author-link' to={'https://darioaricav2.netlify.app/'} target='blank'>
                    Me - Author
                </Link>
            </h2>

            <div className="menu-icons" onClick={handleClick}>
                <i className={
                    state 
                    ? 'fas fa-times'
                    : 'fas fa-bars'}
                ></i>
            </div>

            <ul className={state ? 'mobile-items active' : 'mobile-items'}>
                {AppItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}

                <Link className='author-mobile' to={'https://darioaricav2.netlify.app/'} target='blank'>
                    Me - Author
                </Link>
            </ul>
            
        </nav>
    )
}

export default Navbar;