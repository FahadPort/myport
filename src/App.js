import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Broadroutes from './Routes/Broadroutes';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Header/>
    <Broadroutes />
    <Footer />
    </BrowserRouter>
     
    </div>
  );
}

export default App;
