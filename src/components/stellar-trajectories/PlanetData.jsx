import './PlanetData.css';


const PlanetData = ( { planet, planetData } ) => {
    if (!planetData) return <p>Loading planetary positions.. 🌙</p>;

    const currentPlanet = planetData?.flatMap(row => row.cells).find(cell => cell.name.toLowerCase() === planet.toLowerCase());
    console.log(currentPlanet)

    return (
        <div>  
            {currentPlanet && (
                <div className="planet-data-payload">
                    <h3 className="body-title">{currentPlanet.name}</h3>
                    <p className="body-name"><strong>Name:</strong> {currentPlanet.name}</p>
                    <p className="right-ascension"><strong>Right Ascension:</strong> {currentPlanet.position.equatorial.rightAscension.string}</p>
                    <p className="declination"><strong>Declination:</strong> {currentPlanet.position.equatorial.declination.string}</p>
                    <p className="distance"><strong>Distance from Earth:</strong> {currentPlanet.distance.fromEarth.au} AU</p>
                    <p className="elongation"><strong>Elongation:</strong> {currentPlanet.extraInfo.elongation}</p>
                    <p className="magnitude"><strong>Magnitude:</strong> {currentPlanet.extraInfo.magnitude}</p>
                    <p className="altitude"><strong>Altitude:</strong> {currentPlanet.position.horizonal.altitude.string}</p>
                    <p className="azimuth"><strong>Azimuth:</strong> {currentPlanet.position.horizonal.azimuth.string}</p>
                    <p className="date"><strong>Date:</strong> {new Date(currentPlanet.date).toISOString().split('T')[0]}</p>
                    <p className="constellations"><strong>Constellation:</strong> {currentPlanet.position.constellation.short} - {currentPlanet.position.constellation.name}</p>

                    <p className='last-update'><strong>Last Updated at:</strong> {new Date(currentPlanet.date).toTimeString().split('GMT')[0]}</p>
                </div>
            )}
        </div>
    );
}

export default PlanetData;