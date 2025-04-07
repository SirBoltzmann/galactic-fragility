import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './routes/Home.jsx';
import StellarTrajectories from './routes/StellarTrajectories.jsx';
import StarsAndExoplanets from './routes/StarsAndExoplanets.jsx';
import SunAndMoon from './routes/SunAndMoon.jsx';
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
              path='/stellar-trajectories'
              element={<StellarTrajectories/>} 
            />

            <Route 
              path='/stars-planets' 
              element={<StarsAndExoplanets/>} 
            />

            <Route 
              path='/sun-moon' 
              element={<SunAndMoon/>} 
            />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
