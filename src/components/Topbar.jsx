import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Topbar.css';
import {Link}  from 'react-router-dom'


export default Topbar => {
  return (

    <div className='Topbar'>

      <h3>Se connecter</h3>
      <Menu>
        <Link to="/">Acceuil</Link>
        <Link to="/Reserve">Reservation</Link>
        <Link to="/">Nos vols</Link>
        <Link to="/">Enregistrements</Link>

      </Menu>
    </div>
    
  );
};