//COMPONENTS here
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import StellarBodiesBg from '../assets/seven.jpg';


const SearchStellarBodies = () => {
    return (
        <>
            <Navbar/>
            <Hero
                bgImg = {StellarBodiesBg}
                heading = "Welcome to"
                subheading = 'Stellar Bodies'
                text = {
                    [
                        "In the dance of the Sun and the Moon, we find the harmony of opposites", 
                        "—day and night, light and dark, warmth and coolness.",
                        "Let their eternal rhythm guide you."
                    ]
                }
                buttonText="Let's go!"
                url=''
                // hero-btn to show ---- hero-btn-hide to hide
                btnClass='hero-btn'
            />
            <Footer/>
        </>
    )
}

export default SearchStellarBodies;