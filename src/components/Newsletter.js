import React from "react";
import { Col, Row } from "react-bootstrap";
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Newsletter = () => {
  return (
    <Col lg={7}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our youtube<br /> & Never miss latest updates</h3>
          </Col>
          <Col md={6} xl={7}>
            {/* You can remove the entire form section since it's related to the newsletter subscription */}
          </Col>
          <Col md={6} xl={7}>
            <a href="https://www.youtube.com/channel/UC8QV2YYQ2Pik9lz9zGYeuAw">
              <img src={navIcon3} alt="" />
            </a>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
