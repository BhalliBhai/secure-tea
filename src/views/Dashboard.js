import React from "react";
import ram from "../assets/img/icons/ram.png"
import cpu from "../assets/img/icons/cpu.png"
import swap from "../assets/img/icons/swap-horizontal-orientation-arrows.png"
import cuptower from "../assets/img/icons/cpu-tower.png"
import harddisk from "../assets/img/icons/harddisk.png"

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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row className="page-data">
        {/* CPU */}
        <Col lg="4" md="6" sm="6" >
            <Card className="card-stats css-card ">
              <Card.Body>
                <Row>
                  <Col xs="5" >
                    <div className="icon-big text-center icon-warning card-icon-blue">
                    <img className="mb-4" src={cuptower} alt="Cpu Tower" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">CPU</p>
                      <Card.Title as="h4">16GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex card-stats justify-content-between pt-1">
                  <p className="p-0 mb-0">Total</p>
                  <p className="p-0 mb-0">16 gb</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Percent</p>
                  <p className="p-0 mb-0">21.5%</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Used</p>
                  <p className="p-0 mb-0">3.22 gb</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Free</p>
                  <p className="p-0 mb-0">12.2 gb</p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        {/* Ram */}
          <Col lg="4" md="6" sm="6" >
            <Card className="card-stats css-card ">
              <Card.Body>
                <Row>
                  <Col xs="5" >
                    <div className="icon-big text-center icon-warning card-icon-blue">
                    <img className="mb-4" src={ram} alt="Ram" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">RAM</p>
                      <Card.Title as="h4">16GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex card-stats justify-content-between pt-1">
                  <p className="p-0 mb-0">Total</p>
                  <p className="p-0 mb-0">16 gb</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Percent</p>
                  <p className="p-0 mb-0">21.5%</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Used</p>
                  <p className="p-0 mb-0">3.22 gb</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Free</p>
                  <p className="p-0 mb-0">12.2 gb</p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
           {/* Swap */}
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats css-card">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning card-icon-blue">
                    <img className="mb-4" src={swap} alt="Swap" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Swap</p>
                      <Card.Title as="h4">2 GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex card-stats justify-content-between pt-1">
                  <p className="p-0 mb-0">Total</p>
                  <p className="p-0 mb-0">2 gb</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Percent</p>
                  <p className="p-0 mb-0">0%</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Used</p>
                  <p className="p-0 mb-0">0.22 </p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Free</p>
                  <p className="p-0 mb-0">1.78 gb</p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          {/* Device */}
          <Col lg="8" md="6" sm="6">
            <Card className="card-stats css-card">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning card-icon-blue">
                    <img className="mb-4" src={cpu} alt="CPU" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Device</p>
                      <Card.Title as="h4">Device</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex card-stats justify-content-between pt-1">
                  <p className="p-0 mb-0">fytype</p>
                  <p className="p-0 mb-0">Ext4</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Total</p>
                  <p className="p-0 mb-0">214.85</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Used</p>
                  <p className="p-0 mb-0">76.04 </p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Free</p>
                  <p className="p-0 mb-0">127.82</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Percent</p>
                  <p className="p-0 mb-0">37.3</p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
            {/* Diskio */}
            <Col lg="4" md="6" sm="6">
            <Card className="card-stats css-card">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning card-icon-blue">
                      <img className="mb-4" src={harddisk} alt="Hard Disk" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Diskio</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex card-stats justify-content-between pt-1">
                  <p className="p-0 mb-0">Read Speed</p>
                  <p className="p-0 mb-0">0.0</p>
                </div>
                <div className="stats d-flex card-stats justify-content-between">
                  <p className="p-0 mb-0">Write Speed</p>
                  <p className="p-0 mb-0">0.0</p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
       
      </Container>
    </>
  );
}

export default Dashboard;
