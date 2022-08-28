import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3 footer-bg">
        <Container fluid>
          <nav>
            <p className="copyright text-center ">
              © {new Date().getFullYear()}{" "} Powered by
              <a href="mailto:bhalli0006@gmail.com"> Bhalli</a>
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
