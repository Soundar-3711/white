import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Comments = () => {
  return (
    <section id='contact' className='bg-light py-3'>
         <div className="text-center my-2 py-3">
        <h2 className="text-success">
        Comments <i class="bi bi-chat-left-heart"></i>
        </h2>
        </div>
        <Container>
            <Row className='justify-content-center'>
            <Col md={6}>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-paper-heart"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-person-heart"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Name"
      >
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
      </InputGroup>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
            </Col>
            </Row>
        </Container>
    </section>


  )
}

export default Comments