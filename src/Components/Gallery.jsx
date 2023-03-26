import { ImageList, ImageListItem, Typography } from '@mui/material'
import little from './Images/little.jpg'
import girl from './Images/girl.jpg'
import React from 'react'
import { Box } from '@mui/system'

const Gallery = () => {
    return (
        <>
        <Box>
            <Typography fontWeight="bold" marginLeft="3.5rem" marginTop="1rem" fontSize="1.2rem">Gallery</Typography>
        </Box>
        <Box sx={{marginLeft:"3.5rem", marginRight:"0rem", paddingRight:"3rem"}}>
        <ImageList sx={{ width:"100%", height:"500"}} variant="woven" cols={3} gap={12} >
             <ImageListItem > <img src={little} alt="girl" /> </ImageListItem> 
             <ImageListItem > <img src={girl} alt="girl" /> </ImageListItem> 
             <ImageListItem > <img src={little} alt="girl"   /> </ImageListItem> 
             <ImageListItem > <img src={girl} alt="girl" /> </ImageListItem> 
             <ImageListItem > <img src={little} alt="girl" /> </ImageListItem> 
             <ImageListItem > <img src={girl} alt="girl" /> </ImageListItem> 
             <ImageListItem > <img src={little} alt="girl"  /> </ImageListItem> 
             <ImageListItem > <img src={girl} alt="girl" /> </ImageListItem> 
             </ImageList>
        </Box>
            
        </>
    )
}

export default Gallery