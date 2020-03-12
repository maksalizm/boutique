import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import AuthContextProvider from './contexts/AuthContext';


function App() {
  
  return (
    <Router>
      <AuthContextProvider>
        <NavBar />
        <Header />
        <MainContent />
      </AuthContextProvider>
    </Router>
  );
}


export default App;
