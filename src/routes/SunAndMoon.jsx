//COMPONENTS here
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SunAndMoonBg from '../assets/seven.jpg';


const SunAndMoon = () => {
    return (
        <>
            <Navbar/>
            <Hero
                bgImg = {SunAndMoonBg}
                heading = "Welcome to"
                subheading = 'Sun and Moon'
                text = {
                    [
                        "In the dance of the Sun and the Moon, we find the harmony of opposites", 
                        "—day and night, light and dark, warmth and coolness.",
                        "Let their eternal rhythm guide you."
                    ]
                }
                buttonText="Let's go!"
                url='/stellar-trajectories'
                // hero-btn to show ---- hero-btn-hide to hide
                btnClass='hero-btn'
            />
            <Footer/>
        </>
    )
}

export default SunAndMoon;