import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Videos from './Videos'

import { fetchFromApi } from './utils/FetchFromApi'
import { Silderbar } from './Silderbar'

export const MuiFeed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')

  // useEffect(() => {
  //   fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {})
  // }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>

      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Silderbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='blod' mb={2} sx={{ color: 'white' }}> {selectedCategory}
          <span style={{ color: '#F31503' }}> videos </span>
        </Typography>
        <Videos Videos={[]} />
      </Box>
    </Stack>
  )
}
