import { Grid } from '@mui/material'
import React from 'react'
import Gallery from '../Components/Gallery'
import Hero from '../Components/Hero'
import SideProfile from '../Components/SideProfile'

const Trendy = () => {
    return (

        <>

            <Grid container>
              
                <Grid item md={9} xs={12} sx={{ bgcolor: "#F1EEE5" }}>
                    <Hero />
                    <Gallery />
                </Grid>
                <Grid item md={3} xs={12} sx={{ bgcolor: "#F1EEE5", borderLeft: "1px solid lightgray" }}>
                    <SideProfile />
                </Grid>
            </Grid>


        </>
    )
}

export default Trendy