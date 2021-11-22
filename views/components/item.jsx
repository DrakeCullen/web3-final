import React, { Component } from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBNavbarToggler,
    MDBIcon
} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Thumbnail } from 'react-bootstrap';



const hex2ascii = require('hex2ascii')


class item extends React.Component {
    constructor(props) {
      super(props);
      this.posts = this.props.posts;
      this.action = this.props.action;
      this.phrase = this.props.phrase;
    }

    render() {
      let src = this.posts.img.replaceAll('&#x2F;', '/')
      let img = `<img className="ml-1 mr-1 mt-auto"  width="100%" style="height:300px" src=${src} ></img>`
      return (
        <Card style={{ flex: 1 }} className="mx-4 my-5 d-flex flex-column">
            <Card.Body>
            <div dangerouslySetInnerHTML={{__html: img}} />
                <Card.Title className="align-self-end">{this.posts.title}</Card.Title>
                <Button className="align-self-end" href={`${this.action}/${this.posts._id ? this.posts._id : ''}`}>{this.phrase}</Button>
            </Card.Body>
        </Card>
      );
  
    }  
  }
  
  export default item
