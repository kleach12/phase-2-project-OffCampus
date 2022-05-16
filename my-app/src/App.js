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
  // const [isActive, setIsActive] = useState(false);
  const [isSearched, setIsSeached] = useState("")
  const [isSchool, setIsSchool] = useState("")

  // useEffects fetches the data from the api
  useEffect(() => {
    fetch("http://localhost:3000/Complex")
    .then((res) => res.json())
    .then((data) =>{ 
      setListArr(data)
      setIsLoaded(true)
    })
  },[])

  if (!isLoaded) return <h3>Loading...</h3>;

  // Adds the nes complex that was submitted from the form to the list of complexes
  function newComplex(complex) {
    setListArr([...listArr, complex ])
  }

// Filters complexes for only the school that was chosen
  const searchedArr = listArr.filter((complex) => {
    if(complex.school === isSearched){
      return true}
  })


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
          <MainComponent isSchool ={isSchool} setIsSchool = {setIsSchool} searched = {setIsSeached}/>
          <ComplexList listArrary = {searchedArr}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
