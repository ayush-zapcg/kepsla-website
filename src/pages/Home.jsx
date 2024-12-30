import { ClientCarousel } from '../components/ClientCarousel';
import { KeplsaPromise } from '../components/KepslaPromise';
import { Testimonials } from '../components/Testimonials';
import { CardImage } from '../components/CardImage';
import { Card } from '../components/Card';

const Home = () => {
  return (
    <div
      style={{
        width: '100%',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px'
      }}>
      <Card />
    
      <CardImage />
      <KeplsaPromise />
      <ClientCarousel />
      
      <Testimonials />
    </div>
  );
};

export default Home;
