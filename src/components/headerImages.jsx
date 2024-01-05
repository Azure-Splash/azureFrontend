import Carousel from 'react-bootstrap/Carousel';


export default function HeaderCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src= {require('./images/indoorpool.png')}
          alt="pool "
          width={1710}
          height={356}

        />
        <Carousel.Caption>
          <h5>Indoor Pool</h5>
          <p>Our climate-controlled indoor pools have six lanes, available for both fitness and recreational enthusiasts.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {require('./images/outdoorPool.png')}
          alt="Second slide"
          width={1710}
          height={356}
        />
        <Carousel.Caption>
          <h5>Outdoor Pool</h5>
          <p>Six lanes under the bright blue skies, perfect for dips under the radiant sun</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./images/pool.png')}
          alt="Third slide"
          width={1710}
          height={356}
        />
        <Carousel.Caption>
          <p>
            Join us at Azure Splash at 111 Queens Parade, Carlton 3205.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
