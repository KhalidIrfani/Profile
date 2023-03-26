import {  Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import girl from './Images/girl.jpg'
import girl1 from './Images/girl1.jpg'
import profile from './Images/profile.jpg'
import little from './Images/little.jpg'
import React from 'react'
import { LocationOnOutlined } from '@mui/icons-material'

const Trends = () => {
    return (
        <>
            <Box>
                
                <Typography fontSize="1.7rem" fontWeight="bold" margin="2rem">Trendy Profile</Typography>

                <Box sx={{marginLeft:{xs:".8rem", md:"2.4rem"}}}>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius:"1rem" }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar >
                                <img src={girl} alt="girl" style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem" }}/>
                            </ListItemAvatar>
                            <ListItemText sx={{ marginLeft: ".5rem", marginTop: "1rem", fontWeight: "bold" }}
                                primary={
                                    <React.Fragment>
                                        <Typography fontWeight="bold">
                                        Rukya Jaman
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "flex", marginLeft: "-.2rem", color:"gray"  }}
                                            component="span"
                                            variant="body2"
                                        >
                                            <LocationOnOutlined /><Typography>Dahaka Bangladesh</Typography>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Typography sx={{ marginLeft: "1rem" }}>
                            Lorem ipsum, dolor sit amet consectetur sim adipisicing elit. Quod, fugiat!
                        </Typography>
                        <Button variant='outline' sx={{color:"#9568DF",marginLeft:"1rem", marginTop:".5rem", fontWeight:"bold" ,border:"3px solid #9568DF", borderRadius:"2rem"}}>
                            Folow
                        </Button>

                    </List>


                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius:"1rem", marginTop:".7rem" }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar >
                                <img src={profile} alt="girl" style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem" }}/>
                            </ListItemAvatar>
                            <ListItemText sx={{ marginLeft: ".5rem", marginTop: "1rem", fontWeight: "bold" }}
                                primary={
                                    <React.Fragment>
                                        <Typography fontWeight="bold">
                                        Rukya Jaman
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "flex", marginLeft: "-.2rem", color:"gray"  }}
                                            component="span"
                                            variant="body2"
                                        >
                                            <LocationOnOutlined /><Typography>Dahaka Bangladesh</Typography>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Typography sx={{ marginLeft: "1rem" }}>
                            Lorem ipsum, dolor sit amet consectetur sim adipisicing elit. Quod, fugiat!
                        </Typography>
                        <Button variant='outline' sx={{color:"#9568DF",marginLeft:"1rem", marginTop:".5rem", fontWeight:"bold" ,border:"3px solid #9568DF", borderRadius:"2rem"}}>
                            Folow
                        </Button>

                    </List>


                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius:"1rem",marginTop:".7rem"  }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar >
                                <img src={little} alt="girl" style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem" }}/>
                            </ListItemAvatar>
                            <ListItemText sx={{ marginLeft: ".5rem", marginTop: "1rem", fontWeight: "bold" }}
                                primary={
                                    <React.Fragment>
                                        <Typography fontWeight="bold">
                                        Rukya Jaman
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "flex", marginLeft: "-.2rem", color:"gray"  }}
                                            component="span"
                                            variant="body2"
                                        >
                                            <LocationOnOutlined /><Typography>Dahaka Bangladesh</Typography>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Typography sx={{ marginLeft: "1rem" }}>
                            Lorem ipsum, dolor sit amet consectetur sim adipisicing elit. Quod, fugiat!
                        </Typography>
                        <Button variant='outline' sx={{color:"#9568DF",marginLeft:"1rem", marginTop:".5rem", fontWeight:"bold" ,border:"3px solid #9568DF", borderRadius:"2rem"}}>
                            Folow
                        </Button>

                    </List>


                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius:"1rem", marginTop:".7rem"  }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar >
                                <img src={girl1} alt="girl1" style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem" }}/>
                            </ListItemAvatar>
                            <ListItemText sx={{ marginLeft: ".5rem", marginTop: "1rem", fontWeight: "bold" }}
                                primary={
                                    <React.Fragment>
                                        <Typography fontWeight="bold">
                                        Rukya Jaman
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "flex", marginLeft: "-.2rem", color:"gray"  }}
                                            component="span"
                                            variant="body2"
                                        >
                                            <LocationOnOutlined /><Typography>Dahaka Bangladesh</Typography>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Typography sx={{ marginLeft: "1rem" }}>
                            Lorem ipsum, dolor sit amet consectetur sim adipisicing elit. Quod, fugiat!
                        </Typography>
                        <Button variant='outline' sx={{color:"#9568DF",marginLeft:"1rem", marginTop:".5rem", fontWeight:"bold" ,border:"3px solid #9568DF", borderRadius:"2rem"}}>
                            Folow
                        </Button>

                    </List>

 
                </Box>
            </Box>
        </>
    )
}

export default Trends