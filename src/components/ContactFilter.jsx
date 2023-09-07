
import React, { Component } from 'react'
import { InputGroup , Form } from "react-bootstrap";
import { categories } from '../data/categories';

export class ContactFilter extends Component {

  
  render() {
    const {handleSearch,search,handleCategory,category} = this.props;

    return (
      <InputGroup className="my-3">
      <Form.Control
        value={search}
        onChange={handleSearch}
        placeholder="Search Contact..."/>
      <InputGroup.Text>
      <Form.Select value={category} onChange={handleCategory}>
        <option value="all">All</option>
        {categories.map(category => 
          <option key={category} value={category}>{category}</option>)}
      </Form.Select>
      </InputGroup.Text>
    </InputGroup>
    )
  }
}

export default ContactFilter