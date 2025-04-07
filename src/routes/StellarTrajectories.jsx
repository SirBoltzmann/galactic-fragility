//COMPONENTS here
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import StellarTrajeBg from '../assets/two.jpg';


const StellarTrajectories = () => {
    return (
        <>
            <Navbar/>
            <Hero
                bgImg = {StellarTrajeBg}
                heading = 'Welcome'
                subheading = 'To Stellar Trajectories'
                text = {
                    [
                        'The stars have always guided us,',
                        'whispering secrets of the universe´s vastness.',
                        'Now, embark on a journey through stellar trajectories.',
                        'Discover the paths of the cosmos like never before.'
                    ]
                }
                buttonText='Let´s go!'
                url='/stellar-trajectories'
                // hero-btn to show ---- hero-btn-hide to hide
                btnClass='hero-btn'
            />
            <Footer/>
        </>
    )
}

export default StellarTrajectories;