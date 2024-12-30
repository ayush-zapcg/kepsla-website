export const ClientCarousel = () => {
  const cards = [
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' },
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' },
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' },
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' },
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' },
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' },
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' },
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' },
    { src: 'src/assets/AzayaResort.png', alt: 'Azaya Resorts' }
  ];

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const cardChunks = chunkArray(cards, 3);

  return (
    <div className="carousel-container">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          {cardChunks.map((chunk, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div
                className="d-flex justify-content-center"
                style={{ gap: '10px' }}>
                {chunk.map((card, i) => (
                  <div
                    key={i}
                    className="card"
                    style={{
                      width: '22rem',
                      borderRadius: '26px',
                      margin: '0 10px'
                    }}>
                    <img
                      src={card.src}
                      className="card-img-top"
                      alt={card.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-secondary me-2"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev">
            &laquo;
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next">
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};
