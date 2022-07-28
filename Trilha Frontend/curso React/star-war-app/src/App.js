import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.js'
import Films from './components/pages/Films'
import Planets from './components/pages/Planets.js'
import Species from './components/pages/Species.js'
import People from './components/pages/People.js'
import Starships from './components/pages/Starships.js'
import Vehicles from './components/pages/Vehicles.js'

import Container from './components/layout/Container.js'
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'


function App() {
  return (
    <Router>
      <Navbar />
      
      <Container customClass="min-height">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/films" element={<Films/>}/>
        <Route exact path="/people" element={<People/>}/>
        <Route exact path="/planets" element={<Planets/>}/>
        <Route exact path="/species" element={<Species/>}/>
        <Route exact path="/starships" element={<Starships/>}/>
        <Route exact path="/vehicles" element={<Vehicles/>}/>
      </Routes>

      </Container>
      
      
      <Footer />
    </Router>
  );
}

export default App;
