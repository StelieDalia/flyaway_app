import React from 'react' ;
import avionun  from '../assets/avionun.png'
import {Link}  from 'react-router-dom'
import mlogo from '../assets/mlogo.jpeg'



export default function Home () {
  return (
    <div>
        <img className='plany' src={mlogo} alt="image"></img>
        <img className='first' src={avionun} alt="image"></img>
        <div className='mes'>
          <h3 className='tex'>Mon billet d'avion <br></br> <span className='texo'>en quelques clics ! </span> </h3>
            <button className='button'><Link to="/connexion">S'inscrire</Link></button>
            <button className='buttons'><Link to="/Reserve">Rechercher</Link></button>
           
        </div>
    </div>
  )
}
