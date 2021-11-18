import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon
} from 'mdb-react-ui-kit';
import { FaHome, FaSignInAlt, FaRegistered } from 'react-icons/fa'


export default function navbar() {
  return (
    <div>
      <MDBNavbar expand='sm' light bgColor='white' className="mb-2 py-0">
        <MDBContainer fluid>
          <a href="/">
            <FaHome className="py-0 my-0" style={{ color: "black", fontSize: "1.5vw" }} />
          </a>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse'>
            <MDBNavbarNav right >
              <MDBNavbarItem active>
              </MDBNavbarItem>
              <MDBNavbarItem active>
                <MDBNavbarLink className="py-0 my-0" aria-current='page' href='/' style={{ color: "black", fontSize: "1.5vw" }}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <a href="/login">
              <FaSignInAlt className="py-0 my-0 " style={{ color: "black", fontSize: "1.5vw" }} />
            </a>
            <MDBNavbarLink className="py-0 my-0" href='/login' style={{ color: "black", fontSize: "1.5vw" }}>Login</MDBNavbarLink>

            <a href="/register">
              <FaRegistered className="py-0 my-0 " style={{ color: "black", fontSize: "1.5vw" }} />
            </a>
            <MDBNavbarLink className="py-0 my-0" href='/register' style={{ color: "black", fontSize: "1.5vw" }}>Register</MDBNavbarLink>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}