import React, { useState, useEffect } from 'react';
import { Planets } from './planetCardData';
import useWindowWidth from './useWindowWidth';
import PlanetData from './PlanetData';
import { getPositions } from '../../services/positions.js';
import './PlanetOverview.css';


const PlanetOverview = () => {
    const [ state, setState ] = useState(false); //click
    const [planetData, setPlanetData] = useState(null);
    const [ selectedPlanet, setSelectedPlanet ] = useState(null);
    const [ latitude, setLatitude ] = useState(null);
    const [ longitude, setLongitude ] = useState(null);

    const width = useWindowWidth();
    const visiblePlanets = width < 768 && !state ? Planets.slice(0, 4) : Planets;
    const hiddenPlanets = visiblePlanets.filter( p => selectedPlanet && p.name !== selectedPlanet.name);

    const getPlanetData = async () => {
        if (latitude === null || longitude === null) return;

        try {
            const today = new Date();
            const dateStr = today.toISOString().split('T')[0];
            const timeStr = today.toTimeString().split(' ')[0];

            const response = await getPositions({
                latitude,
                longitude,
                from_date: dateStr,
                to_date: dateStr,
                elevation: 0,
                time: timeStr
            });
            console.log("Full API response:", response.data.table.rows);
            console.log('Updated at:', new Date().toLocaleTimeString());
            setPlanetData(response.data.table.rows);

        } catch (err) {
            if (err.response) {
                console.log("Status:", err.response.status);
                console.log("Data:", err.response.data);
                console.log("Headers:", err.response.headers);
            } else {
                console.log("Error:", err.message);
            }
        }
    };

    // Obtaining LOCATION
    useEffect(() => {
        if (!navigator.geolocation) {
            console.log('Geolocation not supported');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);

            },
            (error) => {
                console.log('Error obtaining location', error);
                alert("Data can't load pressicely based on your position if you don't allow ubication to work as expected.. I suggest you, to allow it. Thx")
            }
        );
    },[])

    // Calling API when we've got LAT and LONG
    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            getPlanetData();
            console.log(latitude, longitude);

            const interval = setInterval(() => {
                getPlanetData();
            }, 2 * 60 * 1000);

            return () => clearInterval(interval);
        }
    }, [latitude, longitude]);

    const handleClick = () => {
        setState(!state);
    }  

    return (
        <div className='planet-overview' id='planet-overview'>
            <h2>Stellar Trajectories</h2>

            <div className={`planets-wrapper ${hiddenPlanets.length > 0 ? 'only-one-visible' : ''}`}>
                {
                    visiblePlanets.map((planet, index) => {
                        const isSelected = selectedPlanet?.name === planet.name;

                        return (
                            <div 
                                // If a planet is selected, all others will have the 'hidden' class..
                                className={`${planet.class} ${selectedPlanet && !isSelected ? 'hidden' : ''}`}
                                key={index} 
                                onClick={() => setSelectedPlanet(planet)}
                            >
                                <img src={planet.img} alt="planet image" draggable={false}/>
                                <h3>{planet.name}</h3>
                            </div>
                        )
                    })
                }

                <div className={`planet-data ${selectedPlanet ? "show" : 'hide'}`}>
                    <i className="fa-solid fa-xmark" onClick ={() => setSelectedPlanet(null)}></i>
                    {
                        selectedPlanet && planetData && (
                            <PlanetData
                                planet = {selectedPlanet.name}
                                planetData = {planetData}
                            />
                        )
                    }
                </div>
            </div>


            <button className='toggle-planets' onClick={handleClick}>
                {state ? 'Hide planets?' : 'Show all planets?'}
            </button>
        </div>
    )
}

export default PlanetOverview