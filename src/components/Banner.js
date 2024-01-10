import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import {Row,Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Banner = () => {
  return (
    <Container>
    <Row className="justify-content-center align-items-center">
    <Col lg={8}>
    <Carousel>
      <Carousel.Item interval={2000}>
        <Image className='d-block w-100' src={require('./myimg/Coffee_1.jpg')}></Image>
      
        <Carousel.Caption>
          <h3>Coffee_1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Image className='d-block w-100' src={require('./myimg/Coffee_4.jpg')}></Image>
        <Carousel.Caption>
          <h3>Coffee_2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Image className='d-block w-100' src={require('./myimg/Coffee_3.jpg')}></Image>
        <Carousel.Caption>
          <h3>Coffee_3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
   
  )
}

export default Banner;