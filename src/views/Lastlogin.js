import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Lastlogin() {
  return (
    <>
     <Container fluid>
        <Row>
          <Col md="12" className="page-data">
            <Card className="strpied-tabled-with-hover table-main">
              <Card.Header className="box-header">
                <Card.Title as="h4" className="text-white text-bold pb-3 pt-1">Last Login</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0 ">
                <Table className="table-hover table-striped table-scroll">
                  <thead>
                    <tr>
                      <th className="border-0">Name </th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Login Status</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Oud-Turnhout</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>Netherlands</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Lastlogin;
