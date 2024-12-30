import React from 'react';

export const Testimonials = () => {
  interface Testimonial {
    text: string;
    subtext: string;
    name: string;
    position: string;
    img: string;
  }

  const testimonials: Testimonial[] = [
    {
      text: 'When Reliance Jio was building its hotel vertical for its super app "MyJio", we looked at a variety of service providers who could give us large amounts of hotel data that could help us optimize our booking. We found that KePSLA’s Search Intelligence feature was the best of the lot and quite ahead of its time.',
      subtext:
        'KePSLA gives us a variety of hotel data for 40,000+ hotels. In our next phase, we plan to implement their innovation on smart images, intelligent videos, and contextual text.',
      name: 'Chaithanya Gowda',
      position: 'Reliance Jio',
      img: 'src/assets/WWA1.png'
    },
    {
      text: 'When Reliance Jio was building its hotel vertical for its super app "MyJio", we looked at a variety of service providers who could give us large amounts of hotel data that could help us optimize our booking. We found that KePSLA’s Search Intelligence feature was the best of the lot and quite ahead of its time.',
      subtext:
        'KePSLA gives us a variety of hotel data for 40,000+ hotels. In our next phase, we plan to implement their innovation on smart images, intelligent videos, and contextual text.',
      name: 'Chaithanya Gowda',
      position: 'Reliance Jio',
      img: 'src/assets/WWA1.png'
    },
    {
      text: 'When Reliance Jio was building its hotel vertical for its super app "MyJio", we looked at a variety of service providers who could give us large amounts of hotel data that could help us optimize our booking. We found that KePSLA’s Search Intelligence feature was the best of the lot and quite ahead of its time.',
      subtext:
        'KePSLA gives us a variety of hotel data for 40,000+ hotels. In our next phase, we plan to implement their innovation on smart images, intelligent videos, and contextual text.',
      name: 'Chaithanya Gowda',
      position: 'Reliance Jio',
      img: 'src/assets/WWA1.png'
    },
    {
      text: 'Another testimonial text goes here, describing customer satisfaction and the value provided by the service.',
      subtext: 'Additional details about the innovation and service provided.',
      name: 'John Doe',
      position: 'Acme Corp',
      img: 'src/assets/WWA1.png'
    },
    {
      text: 'Yet another satisfied client sharing their thoughts and experiences.',
      subtext: 'This part contains further context or expansion.',
      name: 'Jane Smith',
      position: 'Tech Solutions',
      img: 'src/assets/WWA1.png'
    },
    {
      text: 'Yet another satisfied client sharing their thoughts and experiences.',
      subtext: 'This part contains further context or expansion.',
      name: 'Jane Smith',
      position: 'Tech Solutions',
      img: 'src/assets/WWA1.png'
    }
  ];

  const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const testimonialChunks = chunkArray(testimonials, 3);

  return (
    <div className="container-fluid mt-4">
      <div
        id="carouselExampleTestimonials"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'start'
          }}>
          Client Testimonials <br></br>Here some awesome feedback from our
          Clients
        </div>
        <div className="carousel-inner">
          {testimonialChunks.map((chunk, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex justify-content-evenly flex-wrap">
                {chunk.map((testimonial, i) => (
                  <div
                    key={i}
                    className="card shadow-sm"
                    style={{
                      width: '30%',
                      borderRadius: '15px'
                    }}>
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={testimonial.img}
                          alt="Profile"
                          className="rounded-circle"
                          style={{
                            width: '60px',
                            height: '60px',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <p
                        className="text-muted"
                        style={{ fontSize: '14px', marginBottom: '10px' }}>
                        {testimonial.text}
                      </p>
                      <p className="text-muted" style={{ fontSize: '14px' }}>
                        {testimonial.subtext}
                      </p>
                      <div className="ms-3">
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">
                          {testimonial.position}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center gap-5  mt-3">
          <button
            className="btn btn-secondary me-2"
            type="button"
            data-bs-target="#carouselExampleTestimonials"
            data-bs-slide="prev">
            &laquo;
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-target="#carouselExampleTestimonials"
            data-bs-slide="next">
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};
