import styles from '../styles/OurClients.module.css';

const OurClients = () => {
  const clientLogos = [
    {
      logo: 'src/assets/client-logos/1-selina.svg',
      alt: '1-selina'
    },
    {
      logo: 'src/assets/client-logos/2-centre-point.svg',
      alt: '2-centre-point'
    },
    {
      logo: 'src/assets/client-logos/3-sarovar.svg',
      alt: '3-sarovar'
    },
    {
      logo: 'src/assets/client-logos/4-la-quinta.svg',
      alt: '4-la-quinta'
    },
    {
      logo: 'src/assets/client-logos/5-corsendonk.svg',
      alt: '5-corsendonk'
    },
    {
      logo: 'src/assets/client-logos/6-wyndham.svg',
      alt: '6-wyndham'
    },
    {
      logo: 'src/assets/client-logos/7-mercure.svg',
      alt: '7-mercure'
    },
    {
      logo: 'src/assets/client-logos/8-ramada.svg',
      alt: '8-ramada'
    },
    {
      logo: 'src/assets/client-logos/9-best-western.svg',
      alt: '9-best-western'
    },
    {
      logo: 'src/assets/client-logos/10-vits.svg',
      alt: '10-vits'
    },
    {
      logo: 'src/assets/client-logos/11-azaya.svg',
      alt: '11-azaya'
    },
    {
      logo: 'src/assets/client-logos/12-fortune.svg',
      alt: '12-fortune'
    },
    {
      logo: 'src/assets/client-logos/13-mayfair.svg',
      alt: '13-mayfair'
    },
    {
      logo: 'src/assets/client-logos/14-le-relax.svg',
      alt: '14-le-relax'
    },
    {
      logo: 'src/assets/client-logos/15-le-sutra.svg',
      alt: '15-le-sutra'
    },
    {
      logo: 'src/assets/client-logos/16-holiday-inn.svg',
      alt: '16-holiday-inn'
    },
    {
      logo: 'src/assets/client-logos/17-zone.svg',
      alt: '17-zone'
    },
    {
      logo: 'src/assets/client-logos/18-radisson.svg',
      alt: '18-radisson'
    },
    {
      logo: 'src/assets/client-logos/19-the-fern.svg',
      alt: '19-the-fern'
    },
    {
      logo: 'src/assets/client-logos/20-chalet.svg',
      alt: '20-chalet'
    },
    {
      logo: 'src/assets/client-logos/21-ananda.svg',
      alt: '21-ananda'
    },
    {
      logo: 'src/assets/client-logos/22-leisure.svg',
      alt: '22-leisure'
    },
    {
      logo: 'src/assets/client-logos/23-le-botaniste.svg',
      alt: '23-le-botaniste'
    },
    {
      logo: 'src/assets/client-logos/24-comfort-inn.svg',
      alt: '24-comfort-inn'
    },
    {
      logo: 'src/assets/client-logos/25-essentia.svg',
      alt: '25-essentia'
    },
    {
      logo: 'src/assets/client-logos/26-gevora.svg',
      alt: '26-gevora'
    },
    {
      logo: 'src/assets/client-logos/27-start-reverse.svg',
      alt: '27-start-reverse'
    }
  ];

  return (
    <div className={`${styles.clientContainer}`}>
      <div className={`${styles.headingText}`}>
        <h1 className={`${styles.title}`}>Our Clients</h1>
        <h3 className={`${styles.subtitle}`}>
          Here are a few of our over 4000 clients in over 51 countries who use
          our hotel technology solutions.
        </h3>
      </div>
      <div className={`${styles.mainContainer}`}>
        {clientLogos.map((client, index) => (
          <div className={`${styles.logoContainer}`} key={index}>
            <img className={`${styles.logoImage}`} src={client.logo} alt={client.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
