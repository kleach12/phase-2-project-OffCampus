import React from "react";
import "./ComplexList.css"
import List from "./List/List";

function ComplexList({listArrary}){

  const singleComplex = listArrary.map((complex) => console.log(complex))
  console.log(singleComplex)
  
  return(
    <div class = "list">
      {singleComplex}
    </div>
  )
}


export default ComplexList