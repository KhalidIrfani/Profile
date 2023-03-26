import { LocationOnOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import profile from './Images/profile.jpg'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Container>
                <Grid container marginTop="2rem">
                    <Grid item md={3} xs={4}>
                        <Avatar sx={{ width: "5rem", height: "5rem", borderRadius: "1.5rem", alignItems: "center", textAlign: "center", marginLeft: { xs: "0rem", md: "2.5rem" } }}>
                            <img src={profile} alt="profile" height="85vh" />
                        </Avatar>
                    </Grid>
                    <Grid item md={9} xs={8}>
                        <Box display="flex">
                            <Box sx={{ marginRight: { xs: "2.5rem", md: "2.5rem" } }}>
                                <Typography fontWeight="bold" marginTop=".6rem" fontSize="1.2rem" marginLeft=".7rem">8.7k</Typography>
                                <Typography fontSize="1rem" fontWeight="bold" sx={{ color: "gray" }}>Fowllers</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight="bold" marginTop=".6rem" fontSize="1.2rem" marginLeft=".7rem">500</Typography>
                                <Typography fontSize="1rem" fontWeight="bold" sx={{ color: "gray" }}>Fowllers</Typography>
                            </Box>
                        </Box>

                    </Grid>

                </Grid>
                <Box>
                        <Typography fontWeight="bold" sx={{ marginLeft: { xs: "0rem", md: "2rem" } }}  fontSize="1.2rem" marginTop=".8rem">Imran Hossain</Typography>
                        <Typography textAlign="center" fontSize="1rem" display="flex" sx={{ marginLeft: { xs: "0rem", md: "1.7rem", color:"gray" } }} marginTop=".2rem" > <LocationOnOutlined /> Dahaka Bagladesh</Typography>
                    </Box>
                    <Box display="flex">
                        <Button variant='contained' sx={{ bgcolor: "white", color: 'black', marginLeft: { xs: "0rem", md: "2rem" }, borderRadius: ".6rem", marginTop: ".7rem" }}>UI Design</Button>
                        <Button variant='contained' sx={{ bgcolor: "white", color: 'black', marginLeft: ".5rem", borderRadius: ".6rem", marginTop: ".7rem" }}>Graphic Design</Button>
                        <Button variant='contained' sx={{ bgcolor: "white", color: 'black', marginLeft: ".5rem", borderRadius: ".6rem", marginTop: ".7rem" }}>Seo</Button>

                    </Box>
                <Box display="flex" marginTop=".5rem">
                    <Button variant='contained' sx={{ bgcolor: "#9568DF", color: 'White',  marginLeft: { xs: "0rem", md: "2rem"}, borderRadius: "2rem", marginTop: ".7rem", paddingLeft: "1.7rem", paddingRight: "1.7rem", paddingTop:".7rem",paddingBottom:".5rem" }}>Add new post</Button>
                    <Button variant='outlined' sx={{ color: '#9568DF', border: "2px solid #9568DF", marginLeft: "1rem", borderRadius: "2rem", marginTop: ".7rem", paddingLeft: "1.7rem", paddingRight: "1.7rem", paddingTop:".7rem",paddingBottom:".5rem" }}>Edit Profile</Button>

                </Box>
            </Container>


            <Box border="1px solid lightgray" marginTop="1rem">
                <Typography fontWeight="bold" marginLeft="3.5rem" marginTop="1rem" fontSize="1.2rem">Bio</Typography>
                <Typography marginLeft="3.5rem" marginTop="0rem" fontSize="1rem" marginBottom="1rem" sx={{color:"gray"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia exercitationem minus ea error officiis reprehenderit illum saepe, dolorum dolor consequuntur! Officia exercitationem minus ea error officiis reprehenderit illum saepe, dolorum dolor consequuntur!</Typography>
            </Box>


        </>
    )
}

export default Hero