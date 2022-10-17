import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const currencies = [
  {
    value: 'classe Economique',
    label: 'ECO',
  },
  {
    value: 'classe Affaires',
    label: 'Affaires',
  },
  {
    value: 'classe VIP',
    label: 'VIP',
  },
 
];
export default function BasicTextFields() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
   <div className='formulaire'>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Nom " variant="standard" />
      <TextField id="standard-basic" label="Prénom" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Numéro de passeport" variant="standard" />
      <TextField id="standard-basic" label="Passagers" variant="standard" />
      <TextField
          id="standard-select-currency"
          select
          value={currency}
          onChange={handleChange}
          helperText="Sélectionner votre classe"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Choisissez votre moyen de paiement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="mobile " control={<Radio />} label="Mobile Money" />
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        <FormControlLabel value="carte" control={<Radio />} label="Carte de crédit/débit" />
      </RadioGroup>
    </FormControl>
      
    </Box>
   </div>
  );
}