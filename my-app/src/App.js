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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false)

  console.log(isActive)

  useEffect(() => {
    fetch("http://localhost:3000/Complex")
    .then((res) => res.json())
    .then((data) =>{ 
      // console.log(data)
      setListArr(data)
      setIsLoaded(true)
    })
  },[])

  if (!isLoaded) return <h3>Loading...</h3>;

  function newComplex(complex) {
    setListArr([...listArr, complex ])
  }

  const showList = isActive ? <ComplexList listArrary = {listArr}/> : null;

  return (
    <div className="App">
      <Header/>
      <CurtainMenu/>
      <Switch>
        <Route path= "/Complexlist">
          <ComplexList listArrary = {listArr}
          />
        </Route>
        <Route path= "/Complexform">
          <ComplexForm newComplex = {newComplex}/>
        </Route>
        <Route path = "/">
          <MainComponent activateList = {isActive} setIsActive= {setIsActive}/>
          {showList}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
