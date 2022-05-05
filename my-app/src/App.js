import React, {useState, useEffect} from 'react';
import CurtainMenu from './CurtainMenu/CurtainMenu';
import Header from './Header/Header'
import MainComponent from './MainComponent/MainComponent'
import ComplexList from './ComplexList/ComplexList';
import ComplexForm from './ComplexForm/ComplexForm';
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  const [listArr, setListArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Complex")
    .then((res) => res.json())
    .then((data) =>{ 
      // console.log(data)
      setListArr(data)
    })
  },[])

  return (
    <div className="App">
      <Header/>
      <CurtainMenu/>
      <Switch>
        <Route path= "/Complexlist">
          <ComplexList
          listArrary = {listArr}
          />
        </Route>
        <Route path= "/Complexform">
          <ComplexForm/>
        </Route>
        <Route path = "/">
          <MainComponent/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
