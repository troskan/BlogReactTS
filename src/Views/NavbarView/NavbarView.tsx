import { useContext } from "react";
import NavigationContext from "../../Contexts/NavigationContext";

import "./Navbar.css";
function NavbarView() {
  const { setCurrentNavigation } = useContext(NavigationContext);

  return (
    <>
      <div className="navbar-container">
        <div className="ms-5 me-5 d-flex ">
          <nav className="navbar navbar-expand-lg navbar-light w-100 d-flex justify-content-between">
            <a
              className="navbar-brand fs-2 fw-bold"
              href="#"
              onClick={() => setCurrentNavigation("home")}
            >
              Welcome
            </a>

            <div className="d-flex justify-content-center flex-grow-1">
              <a
                className="mx-2 text-decoration-none text-dark link-border"
                href="#"
                onClick={() => setCurrentNavigation("home")}
              >
                Home
              </a>
              <a
                className="mx-2 text-decoration-none text-dark under link-border"
                href="#"
                onClick={() => setCurrentNavigation("blog")}
              >
                Browse Blog
              </a>
            </div>

            <button className="bg-black text-light btn rounded-0">Join</button>
          </nav>
        </div>
      </div>
      <div
        className="bg-dark border-1 border-black "
        style={{ height: "1px" }}
      ></div>
      <div style={{ height: "30px" }}></div>
    </>
  );
}

export default NavbarView;
