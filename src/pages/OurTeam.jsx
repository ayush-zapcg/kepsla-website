import styles from '../styles/OurTeam.module.css';

const OurTeam = () => {
  const teams = [
    {
      title: 'The Decision Makers',
      members: [
        {
          name: 'Deepak Mavinkurve',
          designation: 'Founder | CEO',
          image: 'src/assets/our-team/1-1-deepak.avif',
          contact: 'https://www.linkedin.com/in/deepakmavinkurve'
        },
        {
          name: 'Kishore Pallamreddy',
          designation: 'Chairman & Co-Founder',
          image: 'src/assets/our-team/1-2-kishore.avif',
          contact: 'https://www.linkedin.com/in/kpallamreddy/'
        },
        {
          name: 'Roshan Mendis',
          designation: 'Strategic Advisor',
          image: 'src/assets/our-team/1-3-roshan.avif',
          contact: 'https://www.linkedin.com/in/roshan-mendis-0942082/'
        }
      ]
    },
    {
      title: 'The Movers and Doers',
      members: [
        {
          name: 'Mehe Jabeen',
          designation: 'Vice President, Product and Customer Success',
          image: 'src/assets/our-team/2-1-mehejabeen.avif',
          contact: 'https://www.linkedin.com/in/mehe-jabeen-5a538745/'
        },
        {
          name: 'Yasmeen',
          designation: 'Customer Success',
          image: 'src/assets/our-team/2-2-yasmeen.avif',
          contact: ''
        },
        {
          name: 'Chaitali Darji',
          designation: 'Finance',
          image: 'src/assets/our-team/2-3-chaitali.avif',
          contact: ''
        },
        {
          name: 'Vanshika Goel',
          designation: 'Customer Success',
          image: 'src/assets/our-team/2-4-vanshika.avif',
          contact: ''
        },
        {
          name: 'Rishika Kukreja',
          designation: 'Customer Success',
          image: 'src/assets/our-team/2-5-rishika.avif',
          contact: ''
        },
        {
          name: 'Hiba Bin Billes',
          designation: 'Customer Success',
          image: 'src/assets/our-team/2-6-hiba.avif',
          contact: ''
        }
      ]
    },
    {
      title: 'The Tech Tribe',
      members: [
        {
          name: 'Arvind VB',
          designation: 'Associate Team Lead ',
          image: 'src/assets/our-team/3-1-arvind.avif',
          contact: ''
        },
        {
          name: 'Chaitra MN',
          designation: 'Senior Quality Analyst',
          image: 'src/assets/our-team/3-2-chaitra.avif',
          contact: ''
        },
        {
          name: 'Vrinda Haritesh',
          designation: 'User Experience',
          image: 'src/assets/our-team/3-3-vrinda.avif',
          contact: ''
        },
        {
          name: 'Sairaj Dash',
          designation: 'Software Engineer',
          image: 'src/assets/our-team/3-4-sairaj.avif',
          contact: ''
        },
        {
          name: 'Barsha Rani',
          designation: 'Software Engineer',
          image: 'src/assets/our-team/3-5-barsha.avif',
          contact: ''
        },
        {
          name: 'Pooja Dora',
          designation: 'Software Engineer',
          image: 'src/assets/our-team/3-6-pooja.avif',
          contact: ''
        },
        {
          name: 'Sohail Kagzi',
          designation: 'Software Engineer',
          image: 'src/assets/our-team/3-7-sohail.avif',
          contact: ''
        },
        {
          name: 'Kritika Gohalani',
          designation: 'Quality Analyst – Intern',
          image: 'src/assets/our-team/3-8-kritika.avif',
          contact: ''
        },
        {
          name: 'Arpita Madavalar',
          designation: 'Software Engineer – Intern',
          image: 'src/assets/our-team/3-9-arpita.avif',
          contact: ''
        }
      ]
    }
  ];
  return (
    <div className={`${styles.teamContainer}`}>
      <div className={`${styles.aboutContainer}`}>
        <div className={`${styles.aboutText}`}>
          <h1 className={`open-sans-700 ${styles.title}`}>
            About <br /> us
          </h1>
          <h3 className={`poppins-400 ${styles.subtitle}`}>
            At KePSLA we are focused on organizing the big data on travel search
            using artificial intelligence and machine learning to make the
            experience for travelers, hoteliers, and travel companies more
            rewarding. We leverage predictive intelligence to help our clients
            better understand guest’s/traveler requirements and utilize that
            understanding to design unique product offerings.
          </h3>
        </div>
        <div className={`${styles.aboutBg}`}>
          <img
            className={`${styles.aboutBgImage}`}
            src="src/assets/about-us-container.png"
            alt="about-us-container"
          />
        </div>
      </div>

      <div className={`${styles.teamsContainer}`}>
        <h3 className={`open-sans-700 ${styles.ourTeamText}`}>Our Team</h3>
        {teams.map((team, index) => (
          <div className={`${styles.subTeams}`} key={index}>
            <h2 className={`open-sans-600 ${styles.teamTitle}`}>
              {team.title}
            </h2>
            <div className={`${styles.teamMembers}`}>
              {team.members.map((member, index) => (
                <div className={`${styles.memberContainer}`} key={index}>
                  <img
                    className={`${styles.memberImage}`}
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className={`open-sans-700 ${styles.memberName}`}>
                    {member.name}{' '}
                    {member.contact && (
                      <a
                        className={`${styles.memberContact}`}
                        href={member.contact}
                        target="_blank">
                        ↗
                      </a>
                    )}
                  </h3>
                  <h4 className={`open-sans-400 ${styles.memberDesignation}`}>
                    {member.designation}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
