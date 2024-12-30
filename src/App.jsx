import { Card } from './components/Card';
import { CardImage } from './components/CardImage';
import { ClientCarousel } from './components/ClientCarousel';
import { KeplsaPromise } from './components/KepslaPromise';
import { Navbar } from './components/Navbar';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div id="root">
      <Navbar />
      <Card />
      <KeplsaPromise />
      <p>Who we are</p>
      <CardImage />
      <p>Our clientele</p>
      <ClientCarousel />
      Client Testimonials <br></br>Here some awesome feedback from our Clients
      <Testimonials />
    </div>
  );
}

export default App;
