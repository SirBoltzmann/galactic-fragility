import { Link } from 'react-router-dom';
import './Footer.css';
import LogoLight from '../assets/galaxy-light.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-heading">
            <h2>
                Galactic Fragility
                <img className='footer-logo' src={LogoLight} alt="Galaxy logo"/>
            </h2>
            <p>Write your story in the galactic vastness.</p>
        </div>

        <div className="footer-content">
            <h2>Services</h2>
            <ul>
                <li> <Link to={'/stellar-trajectories'}>Stellar Trajectories App</Link> </li>
                <li> <Link to={'/stars-planets'}>Stars and Exoplanets App</Link> </li>
                <li> <Link to={'/sun-moon'}>Sun and Moon App</Link> </li>
                <li> <a href=''>Report a bug</a> </li>
            </ul>
        </div>

        <div className="footer-content">
            <h2>More about Me</h2>
            <ul>
                <li> <a href='https://darioaricav2.netlify.app/'>My personal Site</a> </li>
                <li> <a href=''>My Mission</a> </li>
                <li> <a href=''>My Github</a> </li>
                <li> <a href=''>Contact Me</a> </li>
            </ul>
        </div>

        <div className="footer-social">
            <h2>Follow more</h2>
            <div className="social-wrapper">
                <a href='' > <i className="fa-brands fa-github"></i> </a>
                <a href='' > <i className="fa-brands fa-facebook"></i> </a>
                <a href='' > <i className="fa-brands fa-instagram"></i> </a>
            </div>
        </div>
    </div>
  )
}

export default Footer