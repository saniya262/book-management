import React from 'react'
import {  Navbar } from 'react-bootstrap'




function Header() {
  return (
    <div>
      

      <Navbar className="bg-body-tertiary p-3">
     
        <Navbar.Brand >
        <h2 className='ms-5'><i class="fa-solid fa-book fa-bounce"></i> Book Mangement</h2></Navbar.Brand>
        <Navbar.Toggle />
        
     
    </Navbar>
    </div>
  )
}

export default Header
