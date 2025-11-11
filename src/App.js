import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


function App() {
  return (
    <Router>
    <div className="app-container">
      <Sidebar />
      <div className="main-container">
        <Header />
        <MainContent 
/>
      </div>
    </div>
    </Router>
  );
}

export default App;