import './App.css';
import React from 'react';
import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Main from './logic/Main';
import { Container } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container textAlign="center">
          <Main />
        </Container>
      </BrowserRouter>
      <Footer />
    </div>
  )
}