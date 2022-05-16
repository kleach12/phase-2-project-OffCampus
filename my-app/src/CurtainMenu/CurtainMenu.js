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

  // this useEffect is used to check th width of the page and resize the curtain menu depending on the size.
  useEffect(() => {
    window.addEventListener('resize', checkFunc)
    return () => {window.removeEventListener('resize',checkFunc)}
  },[])

// toggles the curtain menu to show and hide
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
{/* nav is toggled when the button above is clicked */}
      <nav className= {toggleNav ? "active" : ""}>

      {checkWidth < 2500 && (
        <button 
        onClick ={handleToggleNav} className="close-curtain">
          X
        </button>
      )}
{/* navlinks toggle open and closed when click so user does not hae tto do it manually*/}
        <NavLink to="/" exact className="tags" onClick={handleToggleNav}> Home </NavLink>
        <NavLink to="/Complexlist" exact className="tags" onClick={handleToggleNav}> Complexes</NavLink>
        <NavLink to="/Complexform" exact className="tags" onClick={handleToggleNav}> New Complex</NavLink>

      </nav>
    </div>
  );
}

export default CurtainMenu