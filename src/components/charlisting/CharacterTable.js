import React, { useState, useEffect } from "react";

import { useNavigate  } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import axios from "axios";




const useStyles = makeStyles({
    table: {
      minWidth: 400,
      maxWidth:900,
      
    }
  });



const CharacterTable = (props) => {

  const classes = useStyles();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [characters,setCharacters] = useState([])

  const onOpenDetails = (data) => {
      
    navigate('/character-detail', { state: data}, { replace: true });
    
  }
  

  const handleChangePage = (event, newPage) => {

    console.log("ddd")
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const tableHeadStyle = {
    fontWeight:'bold'
  }

  const loadData = async () => {
    
    await axios.get('https://the-one-api.dev/v2/character?sort=name:asc',
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

  useEffect(() => {
    setCharacters(props.tableData)
    setPage(0)
    setRowsPerPage(10)
  }, [props.tableData])

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
                    <TableCell align="center" style={{padding:'5px'}} onClick={()=>onOpenDetails((row))}>Details</TableCell> 
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
            rowsPerPageOptions={[10, 20, 50]}
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