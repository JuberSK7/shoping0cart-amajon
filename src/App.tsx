import React from "react";
import "./App.css";
import Menubar from "./Menubar";
import Mainbar from "./Pages/index";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Menubar />
      <Mainbar />
    </>
  );
}

export default App;
