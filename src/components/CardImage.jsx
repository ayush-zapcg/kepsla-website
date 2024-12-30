export const CardImage = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex justify-content-center mb-4 ">
          <div
            className="card"
            style={{ width: '35rem', borderRadius: '16px' }}>
            <img
              src="src/assets/WWA1.png"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <p className="card-text">
                KePSLA works with the travel and hospitality industry to provide
                guest feedback solutions, social listening tools, deep guest
                analytics, issue management, mystery shopping and competition
                watch.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center mb-4">
          <div
            className="card"
            style={{ width: '40rem', borderRadius: '16px' }}>
            <img
              src="src/assets/WWA2.png"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <p className="card-text">
                Our solutions help our customers better understand their Guests
                and employers and thus hyper-personalize the product and
                services to grow Revenues.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center mb-4">
          <div
            className="card"
            style={{ width: '35rem', borderRadius: '16px' }}>
            <img
              src="src/assets/WWA3.png"
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <p className="card-text">
                We guarantee ROI on our solution within 60 days of installation
                and a noticeable positive impact on their bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
