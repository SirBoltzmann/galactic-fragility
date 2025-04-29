import { useEffect, useState } from 'react';
import { getStarChart } from '../../services/starCharts.js';
import constellations from './ConstellationsData.jsx';
import Loader from '../../assets/loader.png'
import './SpaceOverview.css';


const SpaceOverview = () => {
	const [ latitude, setLatitude ] = useState('');
	const [ longitude, setLongitude ] = useState('');
	const [ date, setDate ] = useState('');
	const [ style, setStyle ] = useState('default');
	const [ constellation, setConstellation ] = useState(constellations[54].short);
	const [ imageUrl, setImageUrl ] = useState('');
	const [ loading, setLoading ] = useState(false); //testing
	const [ error, setError ] = useState(false);

	// Obtain Location
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLatitude(position.coords.latitude.toFixed(7));
				setLongitude(position.coords.longitude.toFixed(7));
			},
			(error) => {
				console.error('Error obtaining ubication', error);
			}
		);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(false);

		if (!latitude || !longitude) {
			alert('Unavailable location, try again. You might have done something wrong, or the google location logic is not working as expected. Try again later please. <3');
			setLoading(false)
			return;
		}

		const body = {
			style,
			observer: {
				latitude: Number(latitude),
				longitude: Number(longitude),
				date,
			},

			view: {
				type: 'constellation',
				parameters: {
					constellation
				}
			},
		};
		console.log("Sending data:", JSON.stringify(body, null, 2));

		const attempts = Array(4).fill(null).map(() => getStarChart(body));

		try {
			const res = await Promise.any(attempts); // Waits to the first succesful response..
			setImageUrl(res.data.imageUrl);
			setError(false); //To test
			console.log(res.data.imageUrl);
		} catch (err) {
			console.error('All attempts failed', err);
			setError(true);
		}

		setLoading(false);
	}


	return (
		<div className="space-overview">
			<h2>Space Overview</h2>

			<div className="content-wrapper">
				<div className='space-form'>
					<form onSubmit={handleSubmit}>
						<h2>Your position</h2>

						<label>Latitude</label>
						<input
							type="number"
							value={latitude}
							onChange={(e) => setLatitude(e.target.value)}
							required
						/>

						<label>Longitude</label>
						<input
							type="number"
							value={longitude}
							onChange={(e) => setLongitude(e.target.value)}
							required
						/>
						

						<h2>Custom Data Entries:</h2>

						<label>Date</label>
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
						/>

						<label>Style</label>
						<select value={style} onChange={(e) => setStyle(e.target.value)} required >
							<option value="default">Default</option>
							<option value="inverted">Inverted</option>
							<option value="navy">Navy</option>
							<option value="red">Red</option>
						</select>

						
						<label>Constellation</label>
						<select value={constellation} onChange={(e) => setConstellation(e.target.value)} required >
							{
								constellations.map((constellation, index) => {
									return (
										<option value={constellation.short} key={index} >{constellation.name}</option>
									)
								})
							}
						</select>

						<button type="submit" disabled={loading} >
							{ loading ? 'Generating..' : latitude && longitude ? "Generate" : "Obtaining Location..." }
						</button>
					</form>
				</div>

				<div className="space-view">
					<h2>View at the given position and entry values</h2>
					{
						loading
							? (
								<div className='loader-container'>
									<img src={Loader} className='loader' />
									<h3 className='loader-text'>We're rendering your star chart. Please be patient...</h3>
								</div>
							)
							: error 
								? ( <h3 className='error-message'>There was an error creating your star chart.. Please, try again..</h3> )
								: imageUrl ? ( <img src={imageUrl} className='generated-image' /> ) : ''
					}
				</div>
			</div>
		</div>
	)
}

export default SpaceOverview;