import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    return (
        <div>
             <h2> Please Checkout your booking</h2>

             <Form>
            <ToastContainer></ToastContainer>


  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label> Your Address</Form.Label>
    <Form.Control placeholder="Please Provide your Address" />
  </Form.Group>

 

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" onClick={()=>toast('Welcome to Submit')} type="submit">
    Submit
  </Button>

</Form>
        </div>
    );
};

export default Checkout;