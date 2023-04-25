import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../Utils/constants'
import { color, height } from '@mui/system'

const Sidebar = ({selectedCategory, setSelectedCategory}) => 
  (
    <Stack direction="row"
    sx={{
        overflow:'auto',
        height:{sx:'auto' , md:'95%'},
        flexDirection:{md:'column'}
    }}>
        {categories.map((category) =>
        (
            <button className="category-btn"
            onClick={() => setSelectedCategory(category.name)}
            style={{background : category.name === selectedCategory && '#FC1503', color : 'white'}}>
                <span style={{color:category.name === selectedCategory ? 'white' : 'red', marginRight:'15px' }}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  )

export default Sidebar