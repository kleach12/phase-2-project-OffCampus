import React, {useState} from "react";
import "./MainComponent.css"

function MainComponent({setIsActive, searched}){
  
  const [isSchool, setIsSchool] = useState("")

  function handleSchool(e) {
    const selectedSchool = e.target.value
    setIsSchool(selectedSchool)
    searched(selectedSchool)
  }

  if (isSchool === "University of California San Diego"){
    setIsActive(true)
  } else if (isSchool === "San Diego State University"){
    setIsActive(true)
  } else if (isSchool === "University of San Diego"){
    setIsActive(true)
  } else {
    setIsActive(false)
  }

  return(
    <div className = "maincomponent">
      <h2> Find Your Housing</h2>
      <h4>Search by School</h4>
      <select value = {isSchool} onChange = {handleSchool} className = "school" name="Schools" id="Schools" placeholder="Choose School">
        <option value="">Please Choose...</option>
        <option value="University of California San Diego">University of California San Diego</option>
        <option value="San Diego State University"> San Diego State University</option>
        <option value="University of San Diego">University of San Diego</option>
      </select>
    </div>
  )
}

export default MainComponent