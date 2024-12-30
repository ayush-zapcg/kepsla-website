import Rectangle from '../assets/Rectangle.png';

export const Card = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '70vh', minWidthwidth: '100vw' }}>
      <div
        className="card text-white bg-dark border-0"
        style={{ borderRadius: '40px' }}>
        <img src={Rectangle} className="card-img" alt="Background" />

        <div className="card-img-overlay d-flex flex-column justify-content-between">
          <div className="mt-5">
            <h1 className="display-5 fw-bold">
              Building Scale in <br />
              Travel Analytics
            </h1>
            <p className="lead">
              We serve over 5000 customers in 51 countries by providing <br />
              world-class Feedback Management and Guest Intelligence!
            </p>
          </div>
          <div
            className="card p-3 align-self-center mx-auto d-flex justify-content-center align-items-center"
            style={{
              borderRadius: '40px',
              width: '100%',
              height: '206px',
              background:
                'linear-gradient(135deg, rgba(128,128,128,0.5), rgba(192,192,192,0.5))',
              backdropFilter: 'blur(2px)',
              border: 'none',
              marginBottom: '3%'
            }}>
            <div className="d-flex justify-content-around align-items-center w-100 h-100">
              <img
                src="src/assets/corsendock.png"
                alt="Logo 1"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
              <img
                src="src/assets/laquinta.png"
                alt="Logo 2"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
              <img
                src="src/assets/ramada.png"
                alt="Logo 3"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
              <img
                src="src/assets/radisson.png"
                alt="Logo 4"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
              <img
                src="src/assets/mercure.png"
                alt="Logo 5"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
