import Box from '@mui/material/Box';

function TitleWrapper() {
    return ( 
        <Box sx={{
            width: '100%',
            backgroundColor: '#1F2833',
            '&:hover': {
              backgroundColor: '#1A2238',
              // opacity: [0.9, 0.8, 0.7],
            },
          }}>
            <h1 style={{align:"center", fontFamily:"sans-serif Tahoma", color:"#66FCF1", paddingTop:20}}>THE LORD OF THE RINGS API</h1>
            <h2 style={{align:"center", fontFamily:"cursive", color:"red", paddingTop:10}}>The one API to Rule them all</h2>
        </Box>
     );
}

export default TitleWrapper;