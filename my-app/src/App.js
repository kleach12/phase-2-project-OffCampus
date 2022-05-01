import React, {useState, useEffect} from 'react';
import Header from './Header/Header'
import MainComponent from './MainComponent/MainComponent'
import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <MainComponent/>
    </div>
  );
}

export default App;
