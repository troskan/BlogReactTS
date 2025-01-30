import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeView from "./Views/HomeView/HomeView";
import NavbarView from "./Views/NavbarView/NavbarView";
import NavigationContext from "./Contexts/NavigationContext";

import { useState, useEffect } from "react";
import BlogView from "./Views/BlogView/BlogView";
import ControlPanelView from "./Views/ControlPanelView/Containers/ControlPanelView";
import AuthenticationContext from "./Contexts/AuthenticationContext";
import EditBlogPostComponent from "./Views/ControlPanelView/Components/EditBlogPostComponent";
import PortfolioView from "./Views/PortfolioView/PortfolioView";

function App() {
  const [currentNavigation, setCurrentNavigation] = useState<string>("home");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const path = window.location.pathname;
    let navigationState = "home"; // default navigation state

    if (path.includes("/admin")) {
      navigationState = "controlpanel";
    } else if (path.includes("/blog")) {
      navigationState = "blog";
    }
    // Add other path checks as needed

    setCurrentNavigation(navigationState);
  }, [setCurrentNavigation]);
  return (
    <>
      <div className="pb-5 app-min-height">
        <AuthenticationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <NavigationContext.Provider
            value={{ currentNavigation, setCurrentNavigation }}
          >
            {/* <NavbarView />
            {currentNavigation === "home" ? <HomeView /> : null}
            {currentNavigation === "blog" ? <BlogView /> : null}
            {currentNavigation === "portfolio" ? <PortfolioView /> : null}
            {currentNavigation === "controlpanel" ? <ControlPanelView /> : null}
            {currentNavigation === "viewpost" ? (
              <EditBlogPostComponent postId={7} />
            ) : null} */}
            <HomeView />
          </NavigationContext.Provider>
        </AuthenticationContext.Provider>
      </div>
    </>
  );
}

export default App;
