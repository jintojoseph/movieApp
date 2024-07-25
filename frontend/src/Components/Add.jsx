import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = ({person}) => {
//   const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
    "name":'',
    "Category" : '',
    "Moviedir" : '',
    "year":''
  })
  let postData=()=>{
    console.log(form)
    axios.post('http://localhost:4000/new-movie',form)
    .then((res)=>{
      alert('movie data posted');
    })
  }
  let showData=()=>{
    console.log(form);
  }

  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
    // console.log(e);
  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Movie Name"
        defaultValue="Name"
        name='name'
        value={form.name}
        onChange={valueCap}
       
      />
      
       <TextField
        required
        id="outlined-required"
        label="Category"
        defaultValue="Category"
        name='Category'
        value={form.Category}
        onChange={valueCap}
      />
       <TextField
        required
        id="outlined-required"
        label="Directer Name"
        defaultValue="Moviedir"
        name='Moviedir'
        value={form.Moviedir}
        onChange={valueCap}
      /> 
       <TextField
        required
        id="outlined-required"
        label="Release Year"
        defaultValue="year"
        name='year'
        value={form.year}
        onChange={valueCap}
      /> <br />
     <br /> <Button variant="contained" onClick={postData}>SUBMIT</Button>
     <br />
     {/* <small>button is clicked {counter} times</small> */}
    </div>
  </Box>
  )
}

export default Add