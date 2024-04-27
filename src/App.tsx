import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router/Router";
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}

export default App;
