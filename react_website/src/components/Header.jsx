import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Image, Button } from "react-bootstrap";
import Logo from "../assets/logo.svg";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const navbarClass = `app-navbar ${scrolled || menuOpen ? "scrolled" : ""}`;
  return (
    <Navbar expand="lg" fixed="top" className={navbarClass} expanded={menuOpen}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="" />
        </Navbar.Brand>

        <Navbar.Collapse
          id="navbar-nav"
          className="flex-grow-0 ms-auto me-lg-4 order-lg-1 order-2"
        >
          <Nav className="me-auto">
            <Nav.Link href="/#aboutmYOUsic" onClick={closeMenu}>
              About Havells mYOUsic
            </Nav.Link>
            <Nav.Link href="/#mentors" onClick={closeMenu}>
              Mentors & Experts
            </Nav.Link>
            <Nav.Link href="/#bootcamps" onClick={closeMenu}>
              Bootcamps & Events
            </Nav.Link>
            {/* <Nav.Link href="/#stories">Success Stories</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <div className="app-navbar-cta d-flex gap-sm-2 gap-1 order-lg-2 order-1">
          <a className="btn rounded-pill btn-primary" href="/participate">
            <span>Participate Now</span>
          </a>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
