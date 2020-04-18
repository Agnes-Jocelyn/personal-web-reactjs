import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button, Jumbotron, Image} from "react-bootstrap";
import "./Style.css";
import Icon from './img/Header.png'
import gambar1 from "./img/Profile.jpeg";

class Index extends Component {
  render() {
    return (
      <div>
        <Jumbotron class="main">
          <Container>
            <Row>
              <Col xs={6}>
                <img src={Icon} className="icon" alt="...."/>
              </Col>
              <Col>
              <p className="headertext">Hi, Im Agnes Jocelyn and this is my website</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        
          <Container fluid className="persoinfo">
            <br/>
            <h2 className="textinfo">Personal Information</h2>
            <hr className="personinfo"/>
            <br />
            <Row>
              <Col xs={6}>
                <Image src={gambar1} className="personalinfo" alt="...." roundedCircle/>
              </Col>
              <Col xs={4}>
                <p className="info">
                  Hello, my name is Agnes Jocelyn and I'm from Indonesia. Now i'm learning to become 
                  a fullstack developer. And here's more details
                </p>
                <br />
                <Link className="btn btn-light" to="/portfolio">Read more &nbsp; &rarr;</Link>
              </Col>
            </Row>
            <br/> <br/>
          </Container>
        
      </div>
    );
  }
}

export default Index;
