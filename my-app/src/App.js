import React, {useState, useEffect} from 'react';
import CurtainMenu from './CurtainMenu/CurtainMenu';
import Header from './Header/Header'
import MainComponent from './MainComponent/MainComponent'
import ComplexList from './ComplexList/ComplexList';
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className="App">
      <CurtainMenu/>
      <Header/>
      <Switch>
        <Route path= "/Complexlist">
          <ComplexList/>
        </Route>
        <Route path = "/">
          <MainComponent/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
