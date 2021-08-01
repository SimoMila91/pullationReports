import './App.css';
import React from 'react';
import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Main from './logic/Main';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/Context';

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <ContextProvider>
            <Navbar />
            <div style={{ paddingBottom: '9%'}}>
              <Main />
            </div>
            <Footer />
          </ContextProvider>
        </BrowserRouter>
    </div>
  )
}