import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'
import { Navbar, Feed,VideoChannel,ChannelDetails,SearchFeed } from './components'

import React from 'react'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoChannel/>}/>
          <Route path='/channel/:id' element={<ChannelDetails/>}/>
          <Route path='/search/:searchItem' element={<SearchFeed/>}/>
        </Routes>
    </Box>
  </BrowserRouter>
)

export default App;
