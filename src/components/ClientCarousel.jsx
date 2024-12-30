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
    <div className="container-fluid mt-4">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: '100%' }}>
        <div className="carousel-inner">
          {cardChunks.map((chunk, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex justify-content-evenly flex-wrap">
                {chunk.map((card, i) => (
                  <div
                    key={i}
                    className="card"
                    style={{
                      width: '30%',
                      borderRadius: '26px'
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
        <div className="d-flex justify-content-center gap-5  mt-3">
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
