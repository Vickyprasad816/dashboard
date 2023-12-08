import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './register.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
function Register() {

  


  return (
    <div className='reg'>

      <Box
      
        component="form1"
        sx={{  
          '& .MuiTextField-root': { m: 3, width: '70ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} alignItems='center'>
          <Grid xs={6}>
          <TextField
            required
            id="outlined-multiline-static"
            label="Business Description"
            multiline
            rows={3}
            sx={{ width: '300' }}
          />
          </Grid>
          <Grid xs={6}>
          <TextField
            id="outlined-multiline-static"
            label="Corporate Philosophy"
            multiline
            rows={3}
          /> 
          </Grid>
          </Grid>
      </Box>
      <Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '42ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className='form2'>

            <TextField
              required
              id="outlined-required"
              label='Company Name'


            />
            <TextField
              required
              id="outlined-required"
              label="Industry"

            />
            <TextField
              required
              id="outlined-required"
              label="Mail ID"

            />
            <TextField
              required
              id="outlined-required"
              label="Phone Number"

            />
            <TextField
              required
              id="outlined-required"
              label="Location"

            />
            <TextField
              required

              id="outlined-required"
              label="Websie"

            />
            <TextField
              required
              id="outlined-required"
              label="Working Hours"

            />
            <TextField
              type='date'
              required
              id="outlined-required"
            // label="Establishment Date"

            />
            <TextField
              required
              id="outlined-required"
              label="Inital Capital"

            />
            <TextField
              required
              id="outlined-required"
              label="Represntative"

            />
            <TextField
              required
              id="outlined-required"
              label="Branch"

            />
            <TextField
              type='number'
              required
              id="outlined-required"
              label="Number Of Employees"

            />
            <TextField
              type='number'
              required
              id="outlined-required"
              label="Sales Revenue"

            />
            <TextField
              required
              type='number'
              id="outlined-required"
              label="Operation Profit"

            />
            <TextField
              type='number'
              required
              id="outlined-required"
              label="Average Age of Employees"

            />
            <TextField
              type='number'
              required
              id="outlined-required"
              label="Stock"

            />
            <TextField
              required
              id="outlined-required"
              label="Linkedin Link"

            />
            <TextField
              required
              id="outlined-required"
              label="Twitter Link"

            />
            <TextField
              required
              id="outlined-required"
              label="Facebook Link"

            />
            <TextField
              required
              id="outlined-required"
              label="Instagram Link"

            />
            <TextField
              required
              id="outlined-required"
              label="Youtube Link"

            />
          </div>
          <FormControl sx={{ float: 'left', marginLeft: '50px' }}>
            <FormLabel id="demo-radio-buttons-group-label">Foregin Owned</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <Stack direction="row" sx={{ justifyContent: 'center', marginTop: '10ch', }} >
            <Button variant="contained" sx={{ width: '197px', height: '44px',bgcolor:'darkblue' }} >Save</Button>
          </Stack>
        </Box>
      </Box>


    </div>
  )
}

export default Register