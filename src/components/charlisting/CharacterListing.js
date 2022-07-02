import React,{useState, useEffect} from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval  } from 'react-loader-spinner';

import TitleWrapper from '../headings/TitleWrapper'
import CharacterTable from './CharacterTable'

const CharacterListing = () => {


  const [sortType, setSortType] = useState({label:"asc",id:1})
  const [name, setName] = useState('')
  const [race, setRace] = useState('')
  const [gender, setGender] = useState('')

  const [tableData,setTableData] = useState([])
  const [loading, setLoading] = useState(false)


  const sortOptions = [{label:"asc",id:1},{label:"desc",id:2}]
  const genderOptions = [{label:"Male",id:1},{label:"Female",id:2},{label:"Any",id:3}]
  const [raceOptions,setRaceOptions] = useState([])


  const handleRaceOptions = (data) => {

    setRaceOptions(data)
  }


  const nameChange = (e) => {

    setName(e.target.value)
    
  }

  const nameSearchHandler = async() => {

    if(name.trim()===''){
      return
    }
    else {

      setLoading(true)

      await axios.get(`https://the-one-api.dev/v2/character?name=${name}&race=${race===''? race : race.label}&gender=${gender===''? gender :gender.label}`,
      {
        headers: {
          Authorization: 'Bearer vKcOoUXdIMo8u_oeIPnP'
        }
      }
    )
    .then((result) => {
      setTableData(result.data.docs)

    }
    )
    setLoading(false)
    }
    
  }


  const sortChange = (e,data) => {
    setSortType(data) 
  }

  const genderChange = (e,data) => {

    if(data===null) {
      setGender('')
    }
    else{
      setGender(data)
    }
    
  }

  const raceChange = (e,data) => {

    if(data===null) {
      setRace('')
    }
    else{
      setRace(data)
    }
    
  }

  const submitHandler = async() => {

    setLoading(true)

    let characterApi = ''

    if(name==='') {
      characterApi = `https://the-one-api.dev/v2/character?sort=${sortType.label==='desc' ?'desc':'asc'},name=${name}&race=${race===''? race : race.label}&gender=${gender==='' || gender.label==='Any'? '' :gender.label}`

    }
    else {
      characterApi = `https://the-one-api.dev/v2/character?name=${name}&race=${race===''? race : race.label}&gender=${gender==='' || gender.label==='Any'? '' :gender.label}`

    }

    await axios.get(characterApi,
        {
          headers: {
            Authorization: 'Bearer vKcOoUXdIMo8u_oeIPnP'
          }
      }
    )
    .then((result) => {
      setTableData(result.data.docs)

    }
    )
    setLoading(false)

  }


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

          <Box sx={{  border: '1px solid grey', m:'20px', height:'200px' }}>
            <Grid container spacing={1} sx={{p:4}}>
              <Grid item xs={6} align="left" sx={{paddingBottom:'50px'}}>
                <TextField
                  label="Search By Name"
                  id="outlined-size-small"
                  name={"name"}
                  value={name}
                  InputLabelProps={{ shrink: true }}
                  onChange={nameChange}
                  size="small"
                  sx={{width:400}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton onClick={nameSearchHandler}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />  
                
              </Grid>
              <Grid item xs={1.8}/>
              <Grid item xs={4} sx={{paddingBottom:'50px'}}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  value={sortType}
                  options={sortOptions}
                  onChange={sortChange}
                  sx={{ width: 250 }}
                  renderInput={(params) => <TextField {...params} 
                                            size="small" 
                                            label="Sort By" 
                                            onChange={sortChange}
                                            />}
                />
              </Grid>

              <Grid item xs={6} align="left">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  value={race}
                  options={raceOptions}
                  onChange={raceChange}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} size="small" label="Race" />}
                />
              </Grid>
              <Grid item xs={2} align="left">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  value={gender}
                  options={genderOptions}
                  onChange={genderChange}
                  sx={{ width: 170 }}
                  renderInput={(params) => <TextField {...params} size="small" label="Gender" />}
                />
              </Grid>
              <Grid item xs={2}/>
              <Grid item xs={2} align="right">
                <Button variant="contained" onClick={submitHandler}>SUBMIT</Button>
              </Grid>


            </Grid>
          </Box>
          {loading && <Oval  color="#00BFFF" height={80} width={80} align="center"/>}

          <CharacterTable tableData={tableData} handleRaceOptions={handleRaceOptions}/>

      </Box>


    </div>
  )
}

export default CharacterListing