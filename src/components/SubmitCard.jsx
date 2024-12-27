import { Link } from 'react-router-dom';
import styles from '../styles/SubmitCard.module.css';

const SubmitCard = () => {
  return (
    <div className={`${styles.submitCard}`}>
      <img
        className={`${styles.envelopeIcon}`}
        src="src/assets/envelope-icon.svg"
        alt="envelope-icon"
      />
      <div className={`${styles.submitText}`}>
        Thank you for submitting! We will get back to you as soon as possible.
      </div>
      <Link to="/" className={`${styles.linkWrapper}`}>
        <button className={`btn btn-primary ${styles.bgBlueBack}`} type="button">
          Back
        </button>
      </Link>
    </div>
  );
};

export default SubmitCard;
