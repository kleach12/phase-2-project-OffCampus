import React from "react";
import "./List.css"

function List ({
  name,
  price,
  image,
  school,
  bed,
  bath,
  distance,
  friendly
}){
  return(
    <div class = "card">
      <div class = "Shawdow"></div>
      <img src={image} alt = {name} />
      <div class = "data">
        <div class = "content">
          <div id= "text">
            <table>
              <tr>
              <th> <h3>{name} </h3></th>
              </tr>
              <tr>
                <th>School:<span> {school}</span></th>
              </tr>
              <tr>
                <th>Price: <span> ${price}</span></th>
              </tr>
              <tr>
                <th> # of Bed: <span> {bed}</span></th>
                <th> # of Bath: <span>  {bath}</span></th>
              </tr>
              <tr>
                <th> Distance: <span> {distance} mi</span></th>
              </tr>
              <tr>
                <th>Pet Friendly: <span> {friendly} </span></th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

