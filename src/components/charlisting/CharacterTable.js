import React, { useState, useEffect } from "react";

import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import axios from "axios";



const useStyles = makeStyles({
    table: {
      minWidth: 400,
      maxWidth:900,
      
    }
  });

  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread2", 356, 16.0, 49, 3.9),
    createData("Gingerbread3", 356, 16.0, 49, 3.9),
    createData("Gingerbread4", 356, 16.0, 49, 3.9),
    createData("Gingerbread5", 356, 16.0, 49, 3.9),
    createData("Gingerbread6", 356, 16.0, 49, 3.9),
    createData("Gingerbread7", 356, 16.0, 49, 3.9),
    createData("Gingerbread8", 356, 16.0, 49, 3.9),
    createData("Gingerbread9", 356, 16.0, 49, 3.9),
    createData("Gingerbread10", 356, 16.0, 49, 3.9),
    createData("Gingerbread11", 356, 16.0, 49, 3.9),
    createData("Gingerbread12", 356, 16.0, 49, 3.9),
    createData("Gingerbread13", 356, 16.0, 49, 3.9)
  ];



const CharacterTable = () => {

  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [characters,setCharacters] = useState([])
  

  const handleChangePage = (event, newPage) => {

    console.log("ddd")
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const tableHeadStyle = {
    fontWeight:'bold'
  }

  const loadData = async () => {
    
    await axios.get('https://the-one-api.dev/v2/character',
        {
          headers: {
            Authorization: 'Bearer vKcOoUXdIMo8u_oeIPnP'
          }
      }
    )
    .then((result) => {
      console.log("result", result);
      setCharacters(result.data.docs)

    }
    )
  }

  useEffect(() => {
    loadData()   
  }, [])

  console.log("characters",characters)
  
     
  return (

      <TableContainer component={Paper} sx={{border: '1px solid grey', m:'20px', pr:'10px', maxWidth:750}}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={tableHeadStyle} align="center">ID</TableCell>
                <TableCell style={tableHeadStyle} align="center">Name</TableCell>
                <TableCell style={tableHeadStyle} align="center">Race</TableCell>
                <TableCell style={tableHeadStyle} align="center">Gender</TableCell>
                <TableCell style={tableHeadStyle} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characters
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell align="center" component="th" scope="row" style={{padding:'2px'}}>
                      {row._id}
                    </TableCell>
                    <TableCell align="center" style={{padding:'5px'}}>{row.name}</TableCell>
                    <TableCell align="center" style={{padding:'5px'}}>{row.race}</TableCell>
                    <TableCell align="center" style={{padding:'5px'}}>{row.gender}</TableCell>
                    <TableCell align="center" style={{padding:'5px'}}>Details</TableCell>
                  </TableRow>
                ))}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={characters.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange ={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </TableContainer>
            

  )
}

export default CharacterTable