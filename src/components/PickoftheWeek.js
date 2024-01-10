import React,{ useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const PickoftheWeek = () => {
    const [show, setShow] = useState(false);
  return (
    <section id="about" className="my-3">
        <div className="text-center my-2 py-3">
        <h2 className="display-5 text-success">
        <i class="bi bi-stars"></i>Pick of the Week!<i class="bi bi-stars"></i>
        </h2>
        </div>
        <Container>
            <Row className="align-items-center">
            <ToastContainer className="position-fixed bottom-0 end-0"
                    position='bottom-end'
                    style={{ zIndex: 1 }}
        >
          <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Item added to Cart.</Toast.Body>
          </Toast>
        </ToastContainer>
                <Col md={7}>
                <Image src={require('./myimg/Coffee_5.png')} fluid={true} alt='Coffee'></Image>
                </Col>
                <Col md={5}>
                <div className='p-3'>
                    <h2 className='h1'>
                        Pick of the Week
                    </h2>
                    <p className='lead text-muted'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorem voluptatem. Optio quam nisi ipsam voluptatibus tenetur delectus voluptatem adipisci quod perspiciatis? Tempora reprehenderit praesentium, iste molestias minus blanditiis explicabo.
                    </p>
                    <Button variant='success' onClick={()=>setShow(true)}>
                    <i class="bi bi-bag-heart-fill"></i> Buy Now
                    </Button>
                </div>
                </Col>
            </Row>
            
        </Container>
    </section>
  )
}

export default PickoftheWeek