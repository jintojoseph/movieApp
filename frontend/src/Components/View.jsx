import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// // const rows=[{"name":"movie1","Category":"Thriller","Moviedir":"Directer1","year":"2012"},
//             {"name":"movie2","Category":"Comedy","Moviedir":"Directer2","year":"2015"},
//             {"name":"movie3","Category":"Sci-Fi","Moviedir":"Directer3","year":"2004"}
//             ]
   const View = () => {
   const[rows,setRows]=useState([])
   useEffect(()=>{
   axios.get('http://localhost:4000/listmovies').then((res)=>{
   setRows(res.data);
   })
  },[])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Movie Name</TableCell>
          <TableCell align="right">Catagory</TableCell>
          <TableCell align="right">Movie Directer</TableCell>
          <TableCell align="right">Release Year</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.movieName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.directer}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default View