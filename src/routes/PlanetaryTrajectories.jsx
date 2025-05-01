//COMPONENTS here
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PlanetOverview from '../components/planetary-trajectories/PlanetOverview.jsx';
import PlanetaryTrajecBg from '../assets/two.jpg';


const PlanetaryTrajectories = () => {
    return (
        <>
            <Navbar/>
            <Hero
                bgImg = {PlanetaryTrajecBg}
                heading = 'Welcome'
                subheading = 'To Planetary Trajectories'
                text = {
                    [
                        'Explore the hidden routes followed by planets in their eternal dance. ',
                        'From gentle orbits to chaotic paths, each world traces ',
                        'a story on the canvas of time and space. ',
                    ]
                }
                buttonText='Let´s go!'
                url='#planet-overview'
                // hero-btn to show ---- hero-btn-hide to hide
                btnClass='hero-btn'
            />
            <PlanetOverview/>
            <Footer/>
        </>
    )
}

export default PlanetaryTrajectories;