import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './routes/Home.jsx';
import PlanetaryTrajectories from './routes/PlanetaryTrajectories.jsx';
import StarsAndConstellations from './routes/StarsAndConstellations.jsx';
import SearchStellarBodies from './routes/SearchStellarBodies.jsx';
import './App.css'

function App() {
  return (
      <BrowserRouter> {/* Aquí envolvemos todo con BrowserRouter */}
        <div className="App">
          <Routes>
            <Route 
              path='/' 
              element={<Home/>} 
            />

            <Route 
              path='/planetary-trajectories'
              element={<PlanetaryTrajectories/>} 
            />

            <Route 
              path='/stars-constellations' 
              element={<StarsAndConstellations/>} 
            />

            <Route 
              path='/stellar-bodies' 
              element={<SearchStellarBodies/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
