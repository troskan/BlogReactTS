import React from "react";

const NavigationContext = React.createContext<{
  currentNavigation: string;
  setCurrentNavigation: React.Dispatch<React.SetStateAction<string>>;
}>({
  currentNavigation: "home",
  setCurrentNavigation: () => {},
});
export default NavigationContext;
