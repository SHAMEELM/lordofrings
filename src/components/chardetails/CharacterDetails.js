import React from 'react'

import TitleWrapper from '../headings/TitleWrapper'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom'
import Link from '@mui/material/Link';
import { useNavigate  } from 'react-router-dom';
import { Button } from "@mui/material";


const CharacterDetails = () => {

  const location = useLocation();
  const navigate = useNavigate();


  console.log("params",location.state)

  const characterDetails = location.state

  const gridItemStyle = {paddingBottom : 20}
  const gridContainerStyle = {padding:10, paddingLeft:15, paddingRight:10}
  const buttonStyle = {height:'30px',backgroundColor:'#226392'}


  return (
    <div>
      <TitleWrapper/>

      <Box
        sx={{
          width: 1100,
          height: 800,
          border: '1px solid black ',        
          ml:15,
          mr:25,
          my:5
        }}
      >
        <div style={{border: '1px solid black', width:1100, height:'60px', alignItems:"center" }}>
            <h2 style={{fontFamily:'cursive', fontWeight:'bold', align:'center'}}>CHARACTERS - {characterDetails.name}</h2>
        </div>

        <Grid container spacing={1} style={gridContainerStyle}>
          
                  
          <Grid item xs={10}/>
          <Grid item xs={2}>
            <Button style={buttonStyle} variant="contained" onClick={()=>navigate('/', { replace: true })}>Close</Button>
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Name :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.name}
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>WikiURL :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
            <Link rel="noopener noreferrer" target="_blank" href={characterDetails.wikiUrl}>{characterDetails.wikiUrl}</Link>
              
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Race :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.race}
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Gender :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.gender}
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Height :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.height}
          </Grid>


          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Hair :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.hair}
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Realm :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.realm}
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Birth :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.birth}
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Spouse :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.spouse}
          </Grid>

          <Grid item xs={2} align="right" style={gridItemStyle}>
            <b>Death :</b>
          </Grid>
          <Grid item xs={1} style={gridItemStyle}/>
          <Grid item xs={9} align="left" style={gridItemStyle}>
              {characterDetails.death}
          </Grid>


        </Grid>

      </Box>
    </div>
  )
}

export default CharacterDetails