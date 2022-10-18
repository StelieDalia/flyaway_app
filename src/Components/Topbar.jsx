import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default props => {
  return (

    <div className='Topbar'>

      <h3>Enregistrement</h3>
      <Menu>
        <a className="menu-item" href="/">
          Accueil
        </a>
        <a className="menu-item" href="/reservation">
          Réservation
        </a>
        <a className="menu-item" href="vols">
          Nos Vols
        </a>
        <a className="menu-item" href="/enregistrement">
           Enregistrement
        </a>
      </Menu>
    </div>
    
  );
};