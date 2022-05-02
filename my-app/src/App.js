import React, {useState, useEffect} from 'react';
import Header from './Header/Header'
import MainComponent from './MainComponent/MainComponent'
import { Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <Route path = "/">
        <MainComponent/>
      </Route>
    </div>
  );
}

export default App;
