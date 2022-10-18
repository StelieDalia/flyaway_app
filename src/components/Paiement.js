import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Ticket from './Ticket'
import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import '../App.css'
import { Button } from './Button';

export default function BasicTextFields() {
  return (
    <div className='form'>
      
      <Box className='box'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '33.5ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField className='date-expirat0' id="standard-basic" label="Numero de la carte" variant="standard" placeholder='' />
        <TextField className='date-expirat1' id="standard-basic" label="Type de carte" variant="standard" placeholder='' />
        <div className='date-expiration'>
          <TextField className='date-expirat2' id="standard-basic" label="Standard" variant="standard" placeholder='' />
          <TextField className='date-expirat3' id="standard-basic" label="Standard" variant="standard" placeholder='' />
        </div>
        <TextField className='date-expirat4' id="standard-basic" label="Standard" variant="standard" placeholder='' />
        <TextField className='date-expirat5' id="standard-basic" label="Standard" variant="standard" placeholder='' />
      </Box>
      <p className='nb'>NB: tous billets acheté est non ramboursable</p>
      {/* <Routes>
        <Route path="/Ticket" element={<Ticket />} />
      </Routes> */}

      {/* <button className='button'>
        <a href="/">
          <Link className='ecrit-button' to="/Ticket">Valider</Link>
        </a>
      </button> */}
      <Button/>
    </div>
  );
}

