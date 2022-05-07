import React from "react";
import "./List.css"

function List ({name,price,image, school}){
  console.log(school)
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
                <th>School:<span> {school}</span> </th>
              </tr>
              <tr>
                <th>Price: <span> ${price}</span> </th>
              </tr>
              <tr>
                <th> Bed: <span> </span>  </th>
                <th> Bath: <span> </span>  </th>
              </tr>
              <tr>
                <th> Distance: <span> </span> </th>
              </tr>
              <tr>
                <th>Pet Friendly: <span> </span>  </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

