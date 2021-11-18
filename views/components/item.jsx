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
      if (typeof window !== 'undefined') {
        this.window = "why"
      } else {
        global.window = {}
      }
      var synth = global.window.speechSynthesis;
      var utterThis = new SpeechSynthesisUtterance("h");
      synth.speak(utterThis);
    }

    componentWillMount() {
      
  }

    render() {
      let src = this.posts.img.replaceAll('&#x2F;', '/')
      let al = `console.log(${window})`
      let img = `<img className="ml-1 mr-1 mt-auto" top width="100%" src=${src} onClick=${al} ></img>`
      return (
        <Card style={{ flex: 1 }} className="mx-4 my-5">
            {/*<Card.Img className="ml-1 mr-1 mt-auto" top width="100%" src={this.posts.img.replaceAll('&#x2F;', '/')} /> */}
            <Card.Body>
            <div dangerouslySetInnerHTML={{__html: img}} />
                <Card.Title>{this.posts.title}</Card.Title>
                <Button href={`${this.action}/${this.posts._id}`}>{this.phrase}</Button>
            </Card.Body>
        </Card>
      );
  
    }  
  }
  
  export default item
