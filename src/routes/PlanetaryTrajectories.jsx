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
                        'The stars have always guided us,',
                        'whispering secrets of the universe´s vastness.',
                        'Now, embark on a journey through stellar trajectories.',
                        'Discover the paths of the cosmos like never before.'
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