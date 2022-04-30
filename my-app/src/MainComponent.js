import React from "react";
import './MainComponent.css';

function MainComponent(){

  return(
    <div class = "maincomponent">
      <h1>Find your School...</h1>
      <select name="Schools" id="Schools">
        <option value="UCSD">University of Califonria San Diego</option>
        <option value="SDSU"> San Diego State University</option>
        <option value="USD">University of San Diego</option>
      </select>
    </div>
  )
}

export default MainComponent