import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../Resources/Assets/Jevelin_logo_light.png";
function Navbar() {
  return (
    <section className="Navbar">
      <Container>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <img src={logo} alt="logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav my-2 my-lg-0 ">
              <li class="nav-item active">
                <a class="nav-link text-white" href="/">
                  Home 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/">
                  About
                </a>
              </li>
   
              <li class="nav-item">
                <a class="nav-link text-white" href="/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/">
                  Pricing
                </a>
              </li>
              <li class="nav-item ml-5">
                <a class="nav-link text-white " href="/">
                  Contact
                </a>
              </li>
   
            </ul>
          </div>
        </nav>
      </Container>
    </section>
  );
}

export default Navbar;
