import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Topbar.css';

export default props => {
    return (

        <div className='Topbar'>

            <h2>Nos vols</h2>
            <Menu>
                <a className="menu-item" href="/">
                Accueil
                </a>
                <a className="menu-item" href="/Reservation">
                Reservation
                </a>
                <a className="menu-item" href="/Nos vols">
                Nos vols
                </a>
                <a className="menu-item" href="/Enregistrement">
                Enregistrement
                </a>
                <a className="menu-item" href="/Paiement">
                Paiement
                </a>
                <a className="menu-item" href="/Ticket">
                Ticket
                </a>
            </Menu>
        </div>
    
    );
};