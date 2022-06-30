import React from 'react'

import Box from '@mui/material/Box';



import TitleWrapper from '../headings/TitleWrapper'
import CharacterTable from './CharacterTable'

const CharacterListing = () => {
  return (
    <div>
        <TitleWrapper/>

        <Box
          sx={{
            width: 800,
            height: 1500,
            border: '1px solid black ',        
            ml:30,
            mr:30,
            my:5
          }}
        >
          <CharacterTable/>

      </Box>


    </div>
  )
}

export default CharacterListing