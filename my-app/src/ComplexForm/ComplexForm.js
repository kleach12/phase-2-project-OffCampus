import React, {useState} from "react";
import "./ComplexForm.css"

function ComplexForm(){

  return(
    <form>
      <div class ="formdiv">
      <input  class = "formbox "type="text" placeholder="Name"/>
      <input  class = "formbox "type="text" placeholder="Name"/>
      <input  class = "formbox "type="text" placeholder="Name"/>
      <input  class = "formbox "type="text" placeholder="Name"/>
      <input  class = "formbox "type="text" placeholder="Name"/>
      <button type="submit">Add Complex</button>
      </div>
    </form>
  )
}

export default ComplexForm

