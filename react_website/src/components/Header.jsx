import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Image, Button } from "react-bootstrap";
import Logo from "../assets/logo.svg";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Add class if user scrolled more than 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`app-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="flex-grow-0 ms-auto me-4">
          <Nav className="me-auto">
            <Nav.Link href="/#aboutmYOUsic">About mYOUsic</Nav.Link>
            <Nav.Link href="/#mentors">Mentors & Experts</Nav.Link>
            <Nav.Link href="/#bootcamps">Bootcamps & Events</Nav.Link>
            <Nav.Link href="/#stories">Success Stories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a className="btn rounded-pill btn-primary" href="/participate">
          <span>Participate Now</span>
        </a>
      </Container>
    </Navbar>
  );
}

export default Header;
