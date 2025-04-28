import { Link } from 'react-router-dom';
import './FeaturingStellarTrajectories.css';
import GalacticBg from '../../assets/six.jpg';


const FeaturingStellarTrajectories = () => {
    return (
        <div className='featuring-stellar-trajectories'>
            <div className="featuring-content">
                <span className='featuring-first-text'>Featuring "Stellar Trajectories"</span>
                <h2 className='featuring-subheading'>Update yourself with the latest events in the Astronomic Field</h2>

                <p className="featuring-date">Nearby Mars orbit in September 24th</p>
                <p className="featuring-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro? Optio et eum ducimus maxime, odit quos, assumenda consectetur, doloribus vitae totam omnis non beatae deleniti minus perferendis veritatis illo?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro? Optio et eum ducimus maxime, odit quos, assumenda consectetur, doloribus vitae totam omnis non beatae deleniti minus perferendis veritatis illo?
                </p>

                <span className="featuring-redirect">
                    <Link to={'/stellar-trajectories'}>Go to Stellar Trajectories <i className='fa-solid fa-arrow-right'></i> </Link>
                </span>
            </div>

            <img src={GalacticBg} alt="img" className="featuring-img"/>
        </div>
    )
}

export default FeaturingStellarTrajectories;