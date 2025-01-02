import ProductFooter from '../components/ProductFooter';
import styles from '../styles/ReviewIntelligence.module.css';

const data = [
  {
    title: 'Rich Dashboard',
    icon: 'src/assets/review-intelligence/rich-dashboard.png',
    points: [
      'Deep dive into reviews leveraging our Smart Analytics.',
      'Access guest sentiments based on Semantic Analysis.',
      'View department and KPI scores.',
      'Identify strengths and improvement areas.'
    ]
  },
  {
    title: 'Competitor Performance',
    icon: 'src/assets/review-intelligence/comp-performance.png',
    points: [
      'Check how you measure up to your competition.',
      'Compare up to 10 competitors.',
      'Get department and KPI level data of competitors.',
      "Identify Do's and Don’ts.",
      'Set Goals and Milestones and compete against competitors.'
    ]
  },
  {
    title: 'Performance Scores',
    icon: 'src/assets/review-intelligence/performance-scores.png',
    points: [
      'Rating Score Index compiled and calculated from reviews across 120+ sources and in 30 languages.',
      "Department score that is customized as per each hotel's requirement.",
      'Trends and analysis of 18 important Key Performance Indicators of the hotel.'
    ]
  },
  {
    title: 'Manage Reviews',
    icon: 'src/assets/review-intelligence/manage-reviews.png',
    points: [
      'The solution leverages Natural Language Processing (NLP) and Machine Learning to dissect reviews.',
      'Reply directly to the review source from a single point.',
      'Integrate our new AI-generated reply system to increase efficiency.',
      'View original and translated reviews in foreign languages.'
    ]
  }
];

const protectYourBrandData = [
  'KePSLA’s Review Intelligence solution easily integrates with leading PMS, CRM, CRS, RMS, Loyalty and Channel Manager solutions making it simple for users to access via single sign in. Integrated with our Feedback Management solution, hoteliers can engage proactively with guests from pre check-in and seamlessly receive reviews post check out.',
  'Monitor your reviews real-time with our review notification. Receive alerts to market positive reviews and manage negative comments. ',
  'Stream your positive surveys directly onto your website and share them with your community on Facebook and Twitter. More reviews online mean better organic ranking for your website.'
];

export default function ReviewIntelligence() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <img
          src="src/assets/review-intelligence/hero.png"
          alt="Review Intelligence"
        />
        <div className={styles.contentContainer}>
          <h1 className="open-sans-700">
            Review <br /> Intelligence
          </h1>
          <div className="poppins-600">
            Turn review intelligence into your competitive advantage
          </div>
          <p className="poppins-400">
            Power your business with our Review Intelligence solution. Manage
            your online reputation, grow your reviews on sites that matter to
            you most, deep dive into guest reviews and understand your hotel
            performance by the department.
          </p>
        </div>
      </div>

      <div className={styles.metricsContainer}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.icon} alt={item.title} className={styles.icon} />
            <div className={styles.contentContainer}>
              <h3 className="poppins-600">{item.title}</h3>
              <ul>
                {item.points.map((point, i) => (
                  <li className="poppins-400" key={i}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.protectBrandContainer}>
        <h2 className="open-sans-700">
          PROTECT YOUR BRAND, OPTIMIZE YOUR REVIEW PORTFOLIO AND ENGAGE WITH
          YOUR GUESTS!
        </h2>
        <ul>
          {protectYourBrandData.map((content, index) => {
            return (
              <li key={index} className={`${styles.listItem} open-sans-400`}>
                {content}
              </li>
            );
          })}
        </ul>
      </div>

      <ProductFooter />
    </div>
  );
}
