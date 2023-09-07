
import { Alert,Button } from 'react-bootstrap';
import React, { Component } from 'react'

export class Contacts extends Component {
  render() {
    const {id, first, last, category, favourite, phone,no,doneContact} = this.props;
    
    return (
      <Alert variant={favourite ? "success" : "primary"}>
       <div className='contact  w-100'>
        <div className='contact-list d-flex justify-content-between w-50'>
          <h4>
          {no}.{first} {last} 
          </h4>
          <h5>
          {category}
          </h5>
          <h4>
          {phone}
          </h4>
        </div>

        <div className='d-flex'>
          <Button className='btn btn-warning mx-3'>Edit</Button>
          {favourite ? <h4>❤️</h4> : <Button className='btn  btn-primary' onClick={() => doneContact(id)}>❤️</Button>}
        </div>
        </div> 
      </Alert>
    )
  }
}

export default Contacts