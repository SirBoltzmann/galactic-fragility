//COMPONENTS here
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import SpaceOverview from '../components/stars-and-constellations/SpaceOverview.jsx';
import Footer from '../components/Footer.jsx';
import StarsConstellationsBg from '../assets/five.jpg';


const StarsAndConstellations = () => {
    return (
        <>
            <Navbar/>
            <Hero
                bgImg = {StarsConstellationsBg}
                heading = "Now you're"
                subheading = 'In Stars and Constellations'
                text = {
                    [
                        "Stars shine brightly in the night sky, and surrounding them,", 
                        "exoplanets spin in endless motion.",
                        "Some of these distant worlds may hold the key to life beyond our own.",  
                        "Join us on a journey to explore them."
                    ]
                }
                buttonText='Let´s go!'
                url=''
                // hero-btn to show ---- hero-btn-hide to hide
                btnClass='hero-btn'
            />
            <SpaceOverview/>
            <Footer/>
        </>
    )
}

export default StarsAndConstellations;