import React, {useState} from "react";
import "./ComplexForm.css"

function ComplexForm({newComplex}){
  const [isName, setIsName] = useState("")
  const [isImage, setIsImage] = useState("")
  const [isPrice, setIsPrice] = useState("")
  const [isBed, setIsBed] = useState("")
  const [isBath, setIsBath] = useState("")
  const [isSchool, setIsSchool] = useState("")
  const [isDistance, setIsDistance] = useState("")
  const [isPetFriendly, setPetFriendly] = useState("yes")

  function handleName(e){
    setIsName(e.target.value)
  }

  function handleImage(e){
    setIsImage(e.target.value)
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

  function handleOnSubmit(e){
    e.preventDefault();
    const formData = {
      name: isName,
      image:isImage ,
      price: isPrice,
      bed: isBed,
      bath:isBath,
      distance: isDistance,
      school:isSchool,
      friendly: isPetFriendly
    };

    fetch(" http://localhost:3000/Complex",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData)
    })
    
    newComplex(formData)
    setIsName("");
    setIsImage("")
    setIsPrice("");
    setIsBed("");
    setIsBath("");
    setIsSchool("");
    setIsDistance("");
    setPetFriendly("yes")

  }

  return(
    <form onSubmit={handleOnSubmit}>
      <div className ="formdiv">
      <h2> Add Your Complex</h2>
      <div className = "container">
        <div className = "container-child1">
          <p className = "form-question"> Complex Name </p>
          <p className = "form-question"> Picture of Complex </p>
          <p className = "form-question"> Bed </p>
          <p className = "form-question"> Bath </p>
          <p className = "form-question"> Price </p>
          <p className = "form-question"> Choose School </p>
          <p className = "form-question"> Distance from School </p>
          <p className = "form-question"> Pet Friendly </p>
        </div>
        <div className = "container-child2">
          <input onChange={handleName} className = "formbox "type="text" placeholder=" Enter Name " value = {isName}/>
          <input onChange={handleImage} className = "formbox "type="text" placeholder=" Enter Url " value = {isImage}/>
          <input onChange={handlebed} className = "formbox "type="text" placeholder=" Enter Bed " value = {isBed}/>
          <input onChange={handleBath} className = "formbox "type="text" placeholder=" Enter Bath " value = {isBath}/>
          <input onChange={handlePrice} className = "formbox "type="text" placeholder="Enter Price" value = {isPrice}/>
          <select value = {isSchool} onChange = {handleSchool}  className = "formbox" type="select">
            <option value = "" >Choose School</option>
            <option value = "University of California San Diego" >University of California San Diego</option>
            <option value = "San Diego State University"> San Diego State University</option>
            <option value = "University of San Diego">University of San Diego</option>
          </select>
          <input  onChange = {handleDistance} className = "formbox "type="text" placeholder="Enter Distance" value = {isDistance}/>
          <div className="radiobox">
            <input  onChange = {handlePets} checked ={isPetFriendly === "yes"} className = "formradio" name = "pets" type="radio" value = "yes"/>
              <label> Yes </label>
            <input  onChange = {handlePets} checked ={isPetFriendly === "no"} className = "formradio" name = "pets"type="radio" value = "no"/>
              <label> No </label>
          </div>
        </div>
      </div>
      <button className = "submit" type="submit">Add Complex</button>
      </div>
    </form>
  )
}

export default ComplexForm

