import { Link } from 'react-router-dom';
import './FeaturedApps.css';
import Planet from '../../assets/planet.png';
import Constellations from '../../assets/constellation.png';
import Moon from '../../assets/moon.png';


const FeaturedApps = () => {
    return (
        <div className='featured-apps'>
            {/* feat-apps stands for featured-apps */}
            <div className="featured-apps-container">
                <h2 className="feat-apps-subheading">Featured Applications</h2>

                <div className="feat-apps-wrapper">
                    <div className="planetary-trajectories-app featured-app">
                        <Link to={'/planetary-trajectories'}>
                            <img className='planet-trajectory' src={Planet} alt="planet-img" />
                        </Link>
                        <Link to={'/planetary-trajectories'}>
                            <span className='app-title'>Planetary Trajectories</span>
                        </Link>
                    </div>

                    <div className="stars-and-constellations-app featured-app">
                        <Link to={'/stars-constellations'}>
                            <img className='constellation' src={Constellations} alt="constellation-img" />
                        </Link>
                        <Link to={'/stars-constellations'}>
                            <span className='app-title'>Stars and Constellations</span>
                        </Link>
                    </div>

                    <div className="search-stellar-bodies-app featured-app">
                        <Link to={'/stellar-bodies'}>
                            <img className='moon' src={Moon} alt="moon-img" />
                        </Link>
                        <Link to={'/stellar-bodies'}>
                            <span className='app-title'>Search Stellar Bodies</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedApps;
