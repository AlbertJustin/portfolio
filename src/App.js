import React from 'react';
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
