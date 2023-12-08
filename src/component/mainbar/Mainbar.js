import React from 'react'
import { TableContainer, Table, TableHead, Paper, TableBody, TableRow, TableCell,  } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import './Mainbar.css';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import { ReactComponent as Asterisk } from '../../assests/asterisk.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height:650,
  width: 850,
  bgcolor: 'background.paper',
  borderRadius:2,
  boxShadow: 24,
  overflowY:'auto',
  p: 4,
};



export default function Mainbar() {
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div className='main'><Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >

      <div className='register'>
        <div className='Corporate'>Corporate Information<Link className='edit' to="/Register"><BorderColorOutlinedIcon /></Link></div>
        <div className='Allownaces'>Allowances<Link className='edit' onClick={handleClickOpen}><BorderColorOutlinedIcon /></Link></div>
        <div className="Others">Others<button className='edit'><BorderColorOutlinedIcon /></button>
          <TableContainer component={Paper}>
            <Table arial-aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#F7F7F7', fontWeight: 'bold' }}>Retention Rate Of New Graduate Hires</TableCell>
                  <TableCell sx={{ fontWeight: 'normal' }}>Over 50%</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#F7F7F7', fontWeight: 'bold' }}>Work Style (Overseas Bases)</TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#F7F7F7', fontWeight: 'bold' }}>Working Environment</TableCell>
                  <TableCell>Not Working</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer></div>
        <div className="Holidays">Holidays<button className='edit'><BorderColorOutlinedIcon /></button>
          <TableContainer component={Paper}>
            <Table arial-aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#F7F7F7', fontWeight: 'bold' }}>Summer Holidays</TableCell>
                  <TableCell sx={{ color: 'green', fontWeight: 'normal' }}>Yes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#F7F7F7', fontWeight: 'bold' }}>Golden Weeks</TableCell>
                  <TableCell sx={{ color: 'green' }}>Yes</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#F7F7F7', fontWeight: 'bold' }}>Others Holidays</TableCell>
                  <TableCell sx={{ color: 'green' }}>Yes</TableCell>
                </TableRow>
              </TableBody>
            </Table></TableContainer></div>

      </div>

    </Box>
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h3" >
            <b>Allowances</b>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 4}}>
           
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Salary System Based On Meritocracy</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
          aria-required
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>120 Or More Annual Holidays
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Generous Welfare Benifits
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Enhanced Education And Training
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Support System For Acquriring Qualification
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Reduced Working Hours System
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Maternity Care Leave System
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Company Housing / Rent Subsidy
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Family Allowance
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Employee Stock Ownership
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box sx={{width:12, height:12 ,fill:'red'}}><Asterisk/></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Side Job Available
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
          required
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box ></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Mentor System
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Grid container >
        <Grid xs={1}>
          <Box ></Box>
        </Grid>
        <Grid xs={7}>
          <Box>Career Consulting
</Box>
        </Grid>
        <Grid xs={4}>
          <Box><RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup></Box>
        </Grid>
      </Grid>
      <Stack direction="row" sx={{ justifyContent: 'center', marginTop: '10ch', }} >
            <Button variant="contained" sx={{ width: '197px', height: '44px', bgcolor:'darkblue'}} >Save</Button>
          </Stack> 
            </Typography>
          </Box>
      </Modal>
    </div>
    </div>
  )
}
