import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthenticationContext from "../../Contexts/AuthenticationContext";
import NavigationContext from "../../Contexts/NavigationContext";

const NavbarComponent: React.FC = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);
  const { setCurrentNavigation } = useContext(NavigationContext);
  const handleNavClick = (navigation: string) => {
    setCurrentNavigation(navigation);
    console.log(navigation);
    console.log("Click!");
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-5 navbar-custom shadow">
      <Container fluid>
        <Navbar.Brand
          onClick={() => handleNavClick("home")}
          className="mx-lg-auto"
        >
          Alvin Strandberg
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              className="nav-link-custom border border-top-0 border-bottom-0"
              onClick={() => handleNavClick("home")}
            >
              About me
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("blog")}
              className="nav-link-custom border-end "
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("portfolio")}
              className="nav-link-custom border-end"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("news")}
              className="nav-link-custom border-end"
            >
              News
            </Nav.Link>
            {isLoggedIn && (
              <Nav.Link
                onClick={() => handleNavClick("admin")}
                className="nav-link-custom border-end"
              >
                Admin
              </Nav.Link>
            )}
            {/* ... other links ... */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
