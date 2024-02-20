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
      <AuthenticationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <NavigationContext.Provider
          value={{ currentNavigation, setCurrentNavigation }}
        >
          <NavbarView />
          {currentNavigation === "home" ? <HomeView /> : null}
          {currentNavigation === "blog" ? <BlogView /> : null}
          {currentNavigation === "controlpanel" ? <ControlPanelView /> : null}
          {currentNavigation === "viewpost" ? (
            <EditBlogPostComponent postId={7} />
          ) : null}
        </NavigationContext.Provider>
      </AuthenticationContext.Provider>
    </>
  );
}

export default App;
