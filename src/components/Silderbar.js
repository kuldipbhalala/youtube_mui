import React from 'react'
import { Stack } from '@mui/material'
import { categories } from './utils/Constants'

const selectedCategory = 'New';

export const Silderbar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack direction='row' sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
    {categories.map((category) => (
      <button onClick={() => setSelectedCategory(category.name)} className='category-btn' style={{ background: category.name === selectedCategory && '#FC1503', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
        <span style={{ opacity: categories.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
      </button>
    ))}
  </Stack>
)
