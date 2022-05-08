import React from "react";
import "./MainComponent.css"

function MainComponent(){

  return(
    <div class = "maincomponent">
      <h2>Search by School</h2>
      <select class = "school" name="Schools" id="Schools" placeholder="Choose School">
        <option value="">Please Choose...</option>
        <option value="UCSD">University of California San Diego</option>
        <option value="SDSU"> San Diego State University</option>
        <option value="USD">University of San Diego</option>
      </select>
    </div>
  )
}

export default MainComponent