import { Link } from 'react-router-dom';
import './FeaturedApps.css';
import PlanetTrajectory from '../../assets/planet-trajectory.png';
import Exoplanet from '../../assets/exo-stars.png';
import Moon from '../../assets/moon.png';


const FeaturedApps = () => {
    return (
        <div className='featured-apps'>
            {/* feat-apps stands for featured-apps */}
            <h2 className="feat-apps-subheading">Featured Applications</h2>

            <div className="feat-apps-wrapper">
                <div className="stellar-trajectories-app featured-app">
                    <Link to={'/stellar-trajectories'}>
                        <img className='planet-trajectory' src={PlanetTrajectory} alt="planet-img" />
                    </Link>
                    <Link to={'/stellar-trajectories'}>
                        <span className='app-title'>Stellar Trajectories</span>
                    </Link>
                </div>

                <div className="stars-and-exoplanets-app featured-app">
                    <Link to={'/stars-planets'}>
                        <img className='exoplanet' src={Exoplanet} alt="exoplanet-img" />
                    </Link>
                    <Link to={'/stars-planets'}>
                        <span className='app-title'>Stars and Exoplanets</span>
                    </Link>
                </div>

                <div className="sun-and-moon-app featured-app">
                    <Link to={'/sun-moon'}>
                        <img className='moon' src={Moon} alt="moon-img" />
                    </Link>
                    <Link to={'/sun-moon'}>
                        <span className='app-title'>Sun and Moon</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedApps;
