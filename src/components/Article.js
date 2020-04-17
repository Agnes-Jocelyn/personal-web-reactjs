import React, {useEffect, useState } from "react";
import { Container, Col, Row, Jumbotron, Card, Button } from "react-bootstrap";
import axios from 'axios'

  const Article = () => {
    const [data, setData] = useState([])
  
  
  useEffect(() => {
    axios.get(`http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination`)
    .then(response => {
      this.setState({data: response.data});
      console.log(response);
      
    })
    .catch((error) => {
      window.alert('Server having issues')
    })
  }, [])


    return (
      <div>   
      <Jumbotron>
          <Container>
            <br/>
              <h2>Article</h2>
              <hr/>
              <br/> 
              {   
                data.map((item) => {
                const {destinationName, description, images} = item;
                return (
                      <Row>
                      <Col xs={4}>
                      <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={images} alt="..." />
                          <Card.Body>
                            <Card.Title>{destinationName}</Card.Title>
                            <Card.Text> {description}</Card.Text>
                            <Button variant="info">Read more &rarr;</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      </Row>
                     

                      ) })           
                }
                </Container>
                </Jumbotron>
                </div>
    )
              } 
export default Article;
