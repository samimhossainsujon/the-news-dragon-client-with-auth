import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/Shared/RightNav/RightNav";
import Footer from "../pages/Shared/Footer/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={9}>
            <Outlet />
          </Col>

          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
