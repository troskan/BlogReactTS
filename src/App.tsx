import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeView from "./Views/HomeView/HomeView";
import NavbarView from "./Views/NavbarView/NavbarView";
import NavigationContext from "./Contexts/NavigationContext";

import { useState, useEffect } from "react";
import BlogView from "./Views/BlogView/BlogView";
import ControlPanelView from "./Views/ControlPanelView/Containers/ControlPanelView";

function App() {
  const [currentNavigation, setCurrentNavigation] = useState<string>("home");
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
      <NavigationContext.Provider
        value={{ currentNavigation, setCurrentNavigation }}
      >
        <NavbarView />
        {currentNavigation === "home" ? <HomeView /> : null}
        {currentNavigation === "blog" ? <BlogView /> : null}
        {currentNavigation === "controlpanel" ? <ControlPanelView /> : null}
      </NavigationContext.Provider>
    </>
  );
}

export default App;
