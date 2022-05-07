import React, {useState} from "react";
import "./ComplexForm.css"

function ComplexForm(){

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
          <input  class = "formbox "type="text" placeholder=" Enter Name "/>
          <input  class = "formbox "type="text" placeholder=" Enter Bed "/>
          <input  class = "formbox "type="text" placeholder=" Enter Bath "/>
          <input  class = "formbox "type="text" placeholder="Enter Price"/>
          <select id = "optionform" class = "formbox "type="select" placeholder="Name">
            <option value="">Choose a School</option>
            <option class = "option" value="UCSD">University of California San Diego</option>
            <option value="SDSU"> San Diego State University</option>
            <option value="USD">University of San Diego</option>
          </select>
          <input  class = "formbox "type="text" placeholder="Enter Price"/>
          <div class="radiobox">
            <input  class = "formradio" type="radio" />
              <label> Yes </label>
            <input  class = "formradio" type="radio"/>
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

