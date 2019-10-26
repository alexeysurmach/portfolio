import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import DistantWork from "./DistantWork/DistantWork";
import Contacts from "./Contacts/Contacts";

function App() {
  return (
    <div className="App">
        <div className="portfolio">
            <Header />
            <Main />
            <Skills />
            <Projects />
            <DistantWork />
            <Contacts />
            <Footer />
        </div>
    </div>
  );
}

export default App;
