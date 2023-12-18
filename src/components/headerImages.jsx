import Carousel from 'react-bootstrap/Carousel';
import indoorpool from './images/indoorpool.png'

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
          <h5>label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
