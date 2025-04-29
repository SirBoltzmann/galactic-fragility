//COMPONENTS here
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import GalacticInfo from '../components/home/GalacticInfo.jsx';
import FeaturedApps from '../components/home/FeaturedApps.jsx';
import FeaturingPlanetaryTrajectories from '../components/home/FeaturingPlanetaryTrajectories.jsx';
import Footer from '../components/Footer.jsx';

// Hero img
import HomeImg from '../assets/galactic-bg-img.jpg';


const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero
                bgImg = {HomeImg}
                heading = 'Start exploring'
                subheading = 'the galactic vastness'
                text = {
                    [
                        'Since the beginning of time, we have looked to the',
                        'skies for answers. Today, you can explore them ',
                        'with Galactic Fragility.'
                    ]
                }
                buttonText='Learn more'
                url='/'
                // hero-btn to show ---- hero-btn-hide to hide
                btnClass='hero-btn'
            />
            <GalacticInfo/>
            <FeaturedApps/>
            <FeaturingPlanetaryTrajectories/>
            <Footer/>
        </>
    )
}

export default Home;