import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurClients from './pages/OurClients';
import OurTeam from './pages/OurTeam';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
