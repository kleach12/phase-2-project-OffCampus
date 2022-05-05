import React from "react";
import "./List.css"

function List ({name,price,image}){
  return(
    <div class = "card">
      <div class = "Shawdow"></div>
      <img src={image} />
      <div class = "data">
        <div class = "content">
          <h3> {name} </h3>
          <div id= "text">
            <h4>School</h4>
            <h4>Amenities</h4>
            <h4> Price ${price}</h4>
            <p>Pet Frinedly</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

