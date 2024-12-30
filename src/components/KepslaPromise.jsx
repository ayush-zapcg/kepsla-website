import KepslaPromise from '../assets/KepslaPromise.png';
import FutureVideo from '../assets/FutureVideo.png';
import Improve from '../assets/Improve.png';
import Track from '../assets/Track.png';

export const KeplsaPromise = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${KepslaPromise})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '95%',
        borderRadius: '40px',
        marginTop: '40px',
        overflow: 'hidden'
      }}>
      <h2 className="fw-bold text-center text-white mt-4">
        Why work with KePSLA?
      </h2>
      <div
        className="d-flex justify-content-between mt-4"
        style={{
          width: '90%',
          borderRadius: '40px',
          overflow: 'hidden',
          gap: '20px'
        }}>
        {/* Left Side: video */}
        <div style={{ flex: 1, position: 'relative' }}>
          <img
            src={FutureVideo}
            alt="Future Video"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '0 20px 20px 0'
            }}
          />
        </div>

        {/* Right Side: Text */}
        <div className="p-5" style={{ flex: 2, color: 'white' }}>
          <div className="text-start">
            Your Guests journey is unique to your business. We work with you to
            understand that and then <br></br>build a customized Guest
            Experience Solution for your business. Our solutions help our
            customers <br></br>do the following:
            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-center mb-2">
                <img
                  src={Improve}
                  alt="i"
                  style={{
                    height: '30px',
                    width: '30px',
                    objectFit: 'cover'
                  }}
                />
                <i className="bi bi-check-circle-fill me-2 text-warning"> </i>
                Improve direct bookings on your brand website.
              </li>
              <li className="d-flex align-items-center mb-2">
                <button
                  type="button"
                  className="btn btn-warning rounded-circle"
                  style={{
                    height: '30px',
                    width: '30px'
                  }}>
                  <i className="bi bi-play-fill text-dark fs-3"></i>
                </button>
                <i className="bi bi-check-circle-fill me-2 text-warning"></i>
                Understand and act on Guest Sentiments in real-time.
              </li>
              <li className="d-flex align-items-center mb-2">
                <button
                  type="button"
                  className="btn btn-warning rounded-circle"
                  style={{
                    height: '30px',
                    width: '30px'
                  }}>
                  <i className="bi bi-play-fill text-dark fs-3"></i>
                </button>
                <i className="bi bi-check-circle-fill me-2 text-warning"></i>
                Grow loyalty!
              </li>
              <li className="d-flex align-items-center mb-2">
                <button
                  type="button"
                  className="btn btn-warning rounded-circle"
                  style={{
                    height: '30px',
                    width: '30px'
                  }}>
                  <i className="bi bi-play-fill text-dark fs-3"></i>
                </button>
                <i className="bi bi-check-circle-fill me-2 text-warning"></i>
                Get a higher ranking on online travel platforms.
              </li>
              <li className="d-flex align-items-center mb-2">
                <img
                  src={Track}
                  alt="i"
                  style={{
                    height: '30px',
                    width: '30px',
                    objectFit: 'cover'
                  }}
                />
                <i className="bi bi-check-circle-fill me-2 text-warning"></i>
                Track employee happiness and reduce employee attrition.
              </li>
            </ul>
            <p className="mt-4">
              These are not empty promises. We add this to our contract.
              <br></br>
              <a href="#" className="text-warning fw-bold">
                {' '}
                Click here for Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
