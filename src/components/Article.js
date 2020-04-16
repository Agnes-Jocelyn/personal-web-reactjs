import React, { Component } from "react";
import { Container, Col, Row, Jumbotron, Image, Button } from "react-bootstrap";
import Gambar from "./img/3.jpg";

class Article extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <br/>
              <h2>Article</h2>
              <hr/>
              <br/>
            <Row>
              <Col xs={4}>
                <Image src={Gambar} thumbnail className="thumb" />
              </Col>
              <Col xs={6}>
                  <h6>Lorem Ipsum</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </p>
                <Button variant="info">Read more &rarr;</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={4}>
                <Image src={Gambar} thumbnail className="thumb" />
              </Col>
              <Col xs={6}>
                  <h6>Lorem Ipsum</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </p>
                <Button variant="info">Read more &rarr;</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={4}>
                <Image src={Gambar} thumbnail className="thumb" />
              </Col>
              <Col xs={6}>
                  <h6>Lorem Ipsum</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </p>
                <Button variant="info">Read more &rarr;</Button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Article;
