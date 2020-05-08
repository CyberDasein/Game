import React from "react";
import CrashComponent from "./components/CrashComponent";
import { Navigations } from "./components/Navigations";

export const App = () => {
  return (
    <div className="container-fluid">
      <div className="App">
        <Navigations />
        <CrashComponent />
      </div>
    </div>
  );
};

export default App;
