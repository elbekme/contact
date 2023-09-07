

import React, { Component } from 'react'
import { Button, Col, Row,Form } from 'react-bootstrap'
import { categories } from '../data/categories';

export class ContactForm extends Component {
  render() {
    const { submit, handleContact, contact} = this.props;

    return (
      <Form className='w-75 mx-auto' onSubmit={submit}>
        <Row>
        <Form.Group as={Col} className="w-25" controlId="First name">
          <Form.Label>First name</Form.Label>
          <Form.Control onChange={handleContact}   required type="text"
            placeholder="First name"
          />
        </Form.Group>

        <Form.Group as={Col} className="w-25" controlId="Last name">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            onChange={handleContact}   required type="text" placeholder="Last name"
          />
        </Form.Group>

        <Form.Group as={Col} className="w-25" controlId="phone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
          onChange={handleContact}
          
            required
            type="phone"
            placeholder="+998"
          />
        </Form.Group>

        <Form.Group as={Col} className="w-25">
        <Form.Label>Category</Form.Label>
        <Form.Select onChange={handleContact} >
        {categories.map(category => 
          <option key={category} value={category}>{category}</option>)}
        
      </Form.Select>
        </Form.Group>
        </Row>
        <Button className='w-100 mt-3' type="submit">Add Contact</Button>
      </Form>
    )
  }
}

export default ContactForm