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
                        "Search among the stellar bodies scattered across the void. ", 
                        "Track their paths, study their nature, ",
                        "and uncover the unseen architecture of the universe. ",
                        "Every search uncovers a story written in light and gravity... ",
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