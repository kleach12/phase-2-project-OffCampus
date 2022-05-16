import React,{useState, useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { NavLink} from "react-router-dom";
import "./CurtainMenu.css"

function CurtainMenu(){
  const [toggleNav, setToggleNav] = useState(false)
  const [checkWidth, setCheckWidth] = useState(window.innerWidth)

  const checkFunc = () => {
    // console.log(checkWidth)
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
        <AiOutlineMenu style={{color: '#3c6e71'}}/>
      </button>
      )}

      <nav className= {toggleNav ? "active" : ""}>

      {checkWidth <2500 && (
        <button 
        onClick ={handleToggleNav} className="close-curtain">
          X
        </button>
      )}

        <NavLink to="/" exact className="tags"> Home </NavLink>
        <NavLink to="/Complexlist" exact className="tags"> Complexes</NavLink>
        <NavLink to="/Complexform" exact className="tags"> New Complex</NavLink>

      </nav>
    </div>
  );
}

export default CurtainMenu