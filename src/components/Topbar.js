import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Nav.css';
// import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default  () => {
  return (

    <div className='Topbar'>

      <h2>Nos vols</h2>
      <Menu>
        <a className="menu-item" href="/">
          <Link className='ecrit-button' to="/Ticket">Valider</Link>
        </a>
        <a className="menu-item" href="/salads">
          Salads
        </a>
        <a className="menu-item" href="/pizzas">
          Pizzas
        </a>
        <a className="menu-item" href="/desserts">
          Desserts
        </a>
      </Menu>
    </div>
    
  )
}