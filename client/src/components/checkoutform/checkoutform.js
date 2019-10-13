import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormControl, InputGroup, Button } from 'react-bootstrap';

export default function CheckoutForm() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Company Name" />
            </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback type="invalid">
                First Name Is Required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback type="invalid">
                Last Name Is Required.
            </Form.Control.Feedback>
          </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required placeholder="1234 Main St" />
                    <Form.Control.Feedback type="invalid">
                Address Is Required.
            </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required />
                        <Form.Control.Feedback type="invalid">
                City Is Required.
            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control required as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                State Is Required.
            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required />
                        <Form.Control.Feedback type="invalid">
                Zip Code Is Required.
            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridIdType">
                        <Form.Label>ID Type</Form.Label>
                        <Form.Control required as="select">
                            <option>Drivers License</option>
                            <option>Passport</option>
                            <option>Military ID</option>
                            <option>State ID</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                ID Type Is Required.
            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridExpiration">
                        <Form.Label>Expiration</Form.Label>
                        <Form.Control required/>
                        <Form.Control.Feedback type="invalid">
                ID Expiration Is Required.
            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridIDNumber">
                        <Form.Label>ID Number</Form.Label>
                        <Form.Control required/>
                        <Form.Control.Feedback type="invalid">
                ID Number Is Required.
            </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDateOfBirth">
                        <Form.Label>Date Of Birth </Form.Label>
                        <Form.Control required/>
                        <Form.Control.Feedback type="invalid">
                Date of Birth Is Required.
            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check required type="checkbox" label="Agree To Terms and Conditions"/>
                </Form.Group>

                <Button id="cart-submit" type="submit">
                    Submit
                </Button>  
      </Form>
    );
  }
