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
            <table>
              <tr>
                <th>School: </th>
              </tr>
              <tr>
                <th>Price: ${price}</th>
              </tr>
              <tr>
                <th> Bed: </th>
                <th> Bath: </th>
              </tr>
              <tr>
                <th>Pet Friendly: </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

