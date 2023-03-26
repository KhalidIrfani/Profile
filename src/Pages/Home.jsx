import { Grid } from '@mui/material'
import React from 'react'
import Gallery from '../Components/Gallery'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Trends from '../Components/Trends'

const Home = () => {
    return (
        <>
            <Grid container>
               
                <Grid item md={8} sx={{ bgcolor: "#F1EEE5" }}>
                    <Navbar />
                    <Hero/>
                    <Gallery/>
                </Grid>
                <Grid item md={4}  xs={12} sx={{ bgcolor: "#F1EEE5", borderLeft:"1px solid lightgray"}}>
                     <Trends/>
                </Grid>
            </Grid>
        </>
    )
}

export default Home