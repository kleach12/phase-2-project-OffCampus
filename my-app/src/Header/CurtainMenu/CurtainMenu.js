import React,{useState, useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai"
import "./CurtainMenu.css"

function CurtainMenu(){
  console.log(window.innerWidth)
  const [toggleNav, setToggleNav] = useState(false)
  const [checkWidth, setCheckWidth] = useState(window.innerWidth)

  const checkFunc = () => {
    console.log(checkWidth)
    setCheckWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkFunc)

    return () => {window.removeEventListener('resize',checkFunc)}


  },[])


  function handleToggleNav(){
    console.log(toggleNav)
    setToggleNav(!toggleNav)
  }

  return(
    <div>
      {checkWidth < 2500 && (
      <button onClick={handleToggleNav} className="floating-btn">
        <AiOutlineMenu/>
      </button>
      )}

      <nav className= {toggleNav ? "active" : ""}>

      {checkWidth <2500 && (
        <button 
        onClick ={handleToggleNav} className="close-curtain">
          X
        </button>
      )}

        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>

      </nav>
    </div>
  );
}

export default CurtainMenu