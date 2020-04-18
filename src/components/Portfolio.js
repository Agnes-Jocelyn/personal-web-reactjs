import React, { Component } from "react";
import { Container, Col, Row, Jumbotron } from "react-bootstrap";
import "./Style.css";
import gambar1 from "./img/Profile.jpeg";
import icon1 from "./img/css.png";
import icon2 from "./img/html.png";
import icon3 from "./img/js.png";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Jumbotron Jumbotron-fluid>
          <Container  >
            <br/>
            <h2>Portfolio</h2>
            <hr />
            <Row>
              <Col xs={6}>
                <img src={gambar1} className="gmbrport" alt="..."/>
              </Col>
              <Col xs={4}>
                <br />
                <p>
                  I graduated from SMK Kartini Batam, majoring in Multimedia.
                  Now i'm currently studying at Universitas International Batam,
                  exactly at Information System Major. Now I'm learning about
                  React and Javascript at Glints Academy.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container fluid className="language">
          <br />
          <h3>Programming Langguage</h3>
          <Row>
            <Col xs={6} md={4}>
              <img src={icon1} className="icoprogram" alt="..."/>
            </Col>
            <Col xs={6} md={4}>
              <img src={icon2} className="icoprogram" alt="..."/>
            </Col>
            <Col xs={6} md={4}>
              <img src={icon3} className="icoprogram" alt="..."/>
            </Col>
            <br />
          </Row>
        </Container>
        <br />
        <Jumbotron Jumbotron-fluid>
          <Container>
            <h2>Biodata</h2>
            <hr />
            <br />
            <Row>
              <Col>
                <span>Name : Agnes Jocelyn</span>
                <br />
                <span>Date of Birth : 24 December 2001</span>
                <br />
                <span>Gender : Female</span>
                <br />
                <span>Phone Number : 0896-6588-5158</span>
                <br />
                <span>Address : Tiban</span>
                <br />
                <span>Last Education : Highschool</span>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Portfolio;
