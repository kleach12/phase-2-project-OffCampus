import React from "react";
import "./ComplexList.css"
import List from "./List/List";


function ComplexList({listArrary}){
  // console.log(listArrary)

  const singleComplex = listArrary.map((complex) => (
    <List 
    key = {complex.id}
    name = {complex.name} 
    image = {complex.image} 
    price = {complex.price}
    school = {complex.school}
    bed = {complex.bed}
    bath = {complex.bath}
    distance = {complex.distance}
    friendly = {complex.friendly}
    />
  ))
  // console.log(singleComplex)
  
  return(
    <div className = "list">
      {singleComplex}
    </div>
  )
}


export default ComplexList