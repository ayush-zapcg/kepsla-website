import FutureVideo from '../assets/FutureVideo.png';
import Improve from '../assets/Improve.png';
import Track from '../assets/Track.png';
import styles from '../styles/KepslaPromise.module.css';

export const KeplsaPromise = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Why work with KePSLA?</h2>
      <div className={styles.content}>
        {/* Left Side: video */}
        <div className={styles.videoContainer}>
          <img src={FutureVideo} alt="Future Video" className={styles.video} />
        </div>

        {/* Right Side: Text */}
        <div className={styles.textContainer}>
          <div className={styles.textContent}>
            Your Guests journey is unique to your business. We work with you to
            understand that and then build a customized Guest Experience
            Solution for your business. Our solutions help our customers do the
            following:
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <img src={Improve} alt="Improve" className={styles.icon} />
                Improve direct bookings on your brand website.
              </li>
              <li className={styles.listItem}>
                <button type="button" className={styles.iconButton}>
                  <i className="bi bi-play-fill"></i>
                </button>
                Understand and act on Guest Sentiments in real-time.
              </li>
              <li className={styles.listItem}>
                <button type="button" className={styles.iconButton}>
                  <i className="bi bi-play-fill"></i>
                </button>
                Grow loyalty!
              </li>
              <li className={styles.listItem}>
                <button type="button" className={styles.iconButton}>
                  <i className="bi bi-play-fill"></i>
                </button>
                Get a higher ranking on online travel platforms.
              </li>
              <li className={styles.listItem}>
                <img src={Track} alt="Track" className={styles.icon} />
                Track employee happiness and reduce employee attrition.
              </li>
            </ul>
            <p className={styles.promiseText}>
              These are not empty promises. We add this to our contract.
              <br />
              <a href="#" className={styles.demoLink}>
                Click here for Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
