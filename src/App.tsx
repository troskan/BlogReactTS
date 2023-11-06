import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeView from "./Views/HomeView/HomeView";
import NavbarView from "./Views/NavbarView/NavbarView";
import NavigationContext from "./Contexts/NavigationContext";

import { useState } from "react";
import BlogView from "./Views/BlogView/BlogView";

function App() {
  const [currentNavigation, setCurrentNavigation] = useState<string>("home");
  return (
    <>
      <NavigationContext.Provider
        value={{ currentNavigation, setCurrentNavigation }}
      >
        <NavbarView />
        {currentNavigation === "home" ? <HomeView /> : null}
        {currentNavigation === "blog" ? <BlogView /> : null}
      </NavigationContext.Provider>
    </>
  );
}

export default App;
