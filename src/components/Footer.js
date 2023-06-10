import React from 'react';
import { ReactComponent as LegaleaseLogo } from '../images/legaleaseLogo.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';
import { ReactComponent as LinkedIn } from '../images/linkedIn.svg';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col md={7}>
          <LegaleaseLogo className="logo" />
        </Col>
        <Col md={1}>
          <p>About</p>
        </Col>
        <Col md={1}>
          <p>Help</p>
        </Col>
        <Col md={1}>
          <p>Contact</p>
        </Col>
      </Row>

      <Row className="align-bottom">
        <Col md={7}>
          <p className="footer-copyright">&copy; 2023 All Rights Reserved - Bethel Tech - MannaSoft</p>
        </Col>
        <Col md={1}>
          <Facebook className="social-media-icons" />
        </Col>
        <Col md={1}>
          <LinkedIn className="social-media-icons" />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
