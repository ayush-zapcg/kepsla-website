import styles from '../styles/CardImage.module.css';

export const CardImage = () => {
  const cardData = [
    {
      imgSrc: 'src/assets/WWA1.png',
      altText: 'Card 1',
      description:
        'KePSLA works with the travel and hospitality industry to provide guest feedback solutions, social listening tools, deep guest analytics, issue management, mystery shopping and competition watch.'
    },
    {
      imgSrc: 'src/assets/WWA2.png',
      altText: 'Card 2',
      description:
        'Our solutions help our customers better understand their Guests and employers and thus hyper-personalize the product and services to grow Revenues.'
    },
    {
      imgSrc: 'src/assets/WWA3.png',
      altText: 'Card 3',
      description:
        'We guarantee ROI on our solution within 60 days of installation and a noticeable positive impact on their bottom line.'
    }
  ];

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Who we are</p>
      <div className={styles.row}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.col}>
            <div className={styles.card}>
              <img
                src={card.imgSrc}
                alt={card.altText}
                className={styles.cardImg}
              />
              <div className={styles.cardBody}>
                <p className={styles.cardText}>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
