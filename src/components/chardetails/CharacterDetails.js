import React from 'react'

import TitleWrapper from '../headings/TitleWrapper'
import Box from '@mui/material/Box';


const CharacterDetails = () => {
  return (
    <div>
      <TitleWrapper/>

      <Box
        sx={{
          width: 800,
          height: '2000px',
          border: '1px solid black ',        
          ml:30,
          mr:30,
          my:5
        }}
      >
        <div style={{border: '1px solid black', width:800, height:'60px', alignItems:"center" }}>
            <h2 style={{fontFamily:'cursive', fontWeight:'bold', align:'center'}}>CHARACTERS</h2>
        </div>

      </Box>
    </div>
  )
}

export default CharacterDetails