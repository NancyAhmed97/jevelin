import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { ImMobile  } from "react-icons/im";
import { RiPencilRulerLine  } from "react-icons/ri";
import { RiShoppingCart2Line  } from "react-icons/ri";
import "./Home.css";

function Home() {
  return (
    <section className="Home">
      <Navbar />
      <div className="contant d-flex justify-content-center flex-column align-items-center">
        <h5 className="text-white">Compliment your ideas with</h5>
        <h1 className="text-white font-bold">Perfect business template</h1>
      </div>
      <Container>
        <Row>
          <Col md={4} xs={12} className="text-white">
            <ul>
                <li>
<ImMobile />
                </li>
              <li>

                <h5>01. Mobile ready </h5>
              </li>
              <li>Lorem ipsum dolor sit amet, Phasellus id erat eu.</li>
            </ul>
          </Col>
          <Col md={4} xs={12} className="text-white">
            <ul>
                <li>
                    <RiPencilRulerLine />
                </li>
              <li>
                <h5>01. Customizable </h5>
              </li>

              <li>Lorem ipsum dolor sit amet, Phasellus id erat eu.</li>
            </ul>
          </Col>
          <Col md={4} xs={12} className="text-white">
            <ul>
                <li>
                    <RiShoppingCart2Line  font-bold/>
                </li>
              <li>
                <h5>01. Affordable</h5>
              </li>
              <li>Lorem ipsum dolor sit amet, Phasellus id erat eu.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
