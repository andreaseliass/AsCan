import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.js'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact.js'
import NewProject from './components/NewProject.js'
import Projects from './components/pages/Projects.js'

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
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/company" element={<Company/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/newproject" element={<NewProject/>}/>
      </Routes>

      </Container>
      
      
      <Footer />
    </Router>
  );
}

export default App;
