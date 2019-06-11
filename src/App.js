import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductListHook from './components/ProductListHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProductListHook />
      </header>
    </div>
  );
}

export default App;
