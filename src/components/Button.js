import React from 'react'
// import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css'
import iconeavions from "../images/icones/icone-avions.png";

export const Button = () => {
  return (
    <button className='button row justyfie align'>
        <div className="icone-avion">
            <img src={iconeavions} alt="Nike" className="logo" style={{width: 30}}/>
        </div>
        <a href="/">
          <Link className='ecrit-buttons' to="/Ticket">Valider</Link>
        </a>
      </button>
  )
}


export default Button
                                            