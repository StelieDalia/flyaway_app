import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (

    <div className='Topbar'>

      <h3>Enregistrement</h3>
      <Menu>
        <a className="menu-item" href="/">
          Home
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
    
  );
};