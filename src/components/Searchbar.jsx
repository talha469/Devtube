import React from 'react'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const Searchbar = () => {
  return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
        borderRadius: '20',
        border:'1px solid #e3e3e3',
        paddingLeft:'2',
        boxShadow:'none',
        mr:{sm: 5}  
    }}
    >
        <input
        className='search-bar'
        placeholder='search...'
        value=""
        onChange={() => {}}
        style={{
            border: 'none'
        }}
        />
        <IconButton type='submit' sx={{padding:'5px',color:'red'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default Searchbar
