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
    <div className= "card">
      <div className = "Shawdow"></div>
      <img src={image} alt = {name} />
      <div className = "data">
        <div className = "content">
          <div id= "text">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

