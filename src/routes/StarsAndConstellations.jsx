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
                        "Gaze into the night and discover ancient stories written in starlight. ", 
                        "Each constellation whispers secrets of time, ",
                        "and every star burns and ",  
                        "echo the dreams of those who once looked up.. ",
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