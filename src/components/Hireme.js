import React, { Component } from "react";
import { Form, Button, Jumbotron, Container, Card} from "react-bootstrap";
import "./Style.css";

class Hireme extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <br/>
          <h2>Hire Me</h2>
          <hr />
          <br />

          <Container>
            <Card className="cardhire">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Please input your email to hire me</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="info" type="submit" className="buttonsub" block>
                Submit
              </Button>
            </Form>
            </Card>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Hireme;
