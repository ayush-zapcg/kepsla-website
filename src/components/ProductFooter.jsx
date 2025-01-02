import styles from '../styles/ProductFooter.module.css';

export default function ProductFooter() {
  return (
    <div className={styles.productFooter}>
      <div className={styles.caseStudies}>
        <p className="poppins-600">
          Take a look at these case studies to see how
          <br /> effective our product is.
        </p>
        <button className={`${styles.orangeButton} poppins-600`}>
          Case Studies
        </button>
      </div>
      <div className={styles.contactUs}>
        <p className="poppins-400">
          If you are interested in understanding how our Review Intelligence
          product works in a more detailed and personalised manner, please click
          the button to contact us and{' '}
          <span className="poppins-700">BOOK A DEMO</span>.
        </p>
        <button className={`${styles.orangeButton} poppins-600`}>
          Contact Us
        </button>
      </div>
    </div>
  );
}
