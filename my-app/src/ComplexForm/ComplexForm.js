import React, {useState} from "react";
import "./ComplexForm.css"

function ComplexForm(){
  const [isName, setIsName] = useState("")
  const [isPrice, setIsPrice] = useState("")
  const [isBed, setIsBed] = useState("")
  const [isBath, setIsBath] = useState("")
  const [isSchool, setIsSchool] = useState("")
  const [isDistance, setIsDistance] = useState("")
  const [isPetFriendly, setPetFriendly] = useState("yes")

  function handleName(e){
    setIsName(e.target.value)
  }

  function handlePrice(e){
    setIsPrice(e.target.value)
  }

  function handlebed(e){
    setIsBed(e.target.value)
  }

  function handleBath(e){
    setIsBath(e.target.value)
  }

  function handleSchool(e) {
    const selectedSchool = e.target.value
    setIsSchool(selectedSchool)
  }

  function handleDistance(e){
    setIsDistance(e.target.value)
  }

  function handlePets(e){
    setPetFriendly(e.target.value)
  }

  return(
    <form>
      <div class ="formdiv">
      <h2> Add Your Complex</h2>
      <div class = "container">
        <div class = "container-child1">
          <p class = "form-question"> Complex Name </p>
          <p class = "form-question"> Bed </p>
          <p class = "form-question"> Bath </p>
          <p class = "form-question"> Price </p>
          <p class = "form-question"> Choose School </p>
          <p class = "form-question"> Distance from School </p>
          <p class = "form-question"> Pet Friendly </p>
        </div>
        <div class = "container-child2">
          <input onChange={handleName} class = "formbox "type="text" placeholder=" Enter Name " value = {isName}/>
          <input onChange={handlebed} class = "formbox "type="text" placeholder=" Enter Bed " value = {isBed}/>
          <input onChange={handleBath} class = "formbox "type="text" placeholder=" Enter Bath " value = {isBath}/>
          <input onChange={handlePrice} class = "formbox "type="text" placeholder="Enter Price" value = {isPrice}/>
          <select value = {isSchool} onChange = {handleSchool}  class = "formbox" type="select">
            <option value = "" >Choose School</option>
            <option value = "University of California San Diego" >University of California San Diego</option>
            <option value = "San Diego State University"> San Diego State University</option>
            <option value = "University of San Diego">University of San Diego</option>
          </select>
          <input  onChange = {handleDistance} class = "formbox "type="text" placeholder="Enter Distance" value = {isDistance}/>
          <div class="radiobox">
            <input  onChange = {handlePets} checked ={isPetFriendly === "yes"} class = "formradio" name = "pets" type="radio" value = "yes"/>
              <label> Yes </label>
            <input  onChange = {handlePets} checked ={isPetFriendly === "no"} class = "formradio" name = "pets"type="radio" value = "no"/>
              <label> No </label>
          </div>
        </div>
      </div>
      <button class = "submit" type="submit">Add Complex</button>
      </div>
    </form>
  )
}

export default ComplexForm

