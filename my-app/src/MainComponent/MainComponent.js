import React, {useState} from "react";
import "./MainComponent.css"

function MainComponent({activateList, setIsActive}){
  
  const [isSchool, setIsSchool] = useState("")

  function handleSchool(e) {
    const selectedSchool = e.target.value
    setIsSchool(selectedSchool)
    setIsActive((activateList) => !activateList)
  }

  return(
    <div class = "maincomponent">
      <h2>Search by School</h2>
      <select value = {isSchool} onChange = {handleSchool} class = "school" name="Schools" id="Schools" placeholder="Choose School">
        <option value="">Please Choose...</option>
        <option value="University of California San Diego">University of California San Diego</option>
        <option value="San Diego State University"> San Diego State University</option>
        <option value="University of San Diego">University of San Diego</option>
      </select>
    </div>
  )
}

export default MainComponent