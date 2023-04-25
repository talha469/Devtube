import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { borderRight } from '@mui/system'
import Sidebar from './Sidebar'
import VideoChannel from './VideoChannel'
import {fetchDataFromAPI} from '../Utils/fetchDataFromAPI'

const  Feed = () => {

const[selectedCategory, setSelectedCategory] = useState('New');
const[videos, setVideo] = useState([]);

useEffect( () => {
  fetchDataFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideo(data.items))
},[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'},
                borderRight:'1px solid #3d3d3d',
                px:{sx:0, md:2}}}>
                  <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
        Copyright @Optimtechs 2023
      </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto'}}>
        <Typography color='white'>
          {selectedCategory} <span style={{color:'#F31503'}}>Videos</span> 
        </Typography>
        <VideoChannel videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed