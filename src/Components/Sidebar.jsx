import { Add, ExitToAppOutlined, HouseOutlined, NotificationsOutlined, PermIdentityOutlined, SettingsOutlined, TextsmsOutlined } from '@mui/icons-material'
import { Badge, Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system';
import logo from './Images/logo.png'
import React, { useState } from 'react'
import styled from '@emotion/styled';

const CustomTab = styled(Box)({
    fontWeight: "550",
    color: "darkgray",
    fontSize: "2rem",

    '& .Icons': {
        fontSize: "3rem !important",
        backgroundColor: "#F1EEE5",
        borderRadius: ".5rem",
        paddingTop: ".6rem",
        paddingBottom: ".6rem",
        paddingLeft: ".6rem",
        paddingRight: ".6rem",
        // '& .Mui-selected': { backgroundColor: '#01778C', color: 'white !important', '& svg': { color: 'white!important' }}

    },

    '& .Icons.active':{
        backgroundColor:"#9568DF!important",
        color:"white!important"

    }

});


const Sidebar = (props) => {

    const [componentIndex, setComponentIndex] = useState(0);

    props.onChildData(componentIndex);


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValues) => {
        setValue(newValues);
    };
    return (
        <>

            <Container sx={{ alignItems: "center", textAlign: "center", marginTop: "1.5rem", marginBottom: "2rem" }}>
                <img src={logo} alt="logo" />
            </Container>

            <Box orientation="vertical" sx={{ textAlign: "center", alignItems: "center"}}>

                <CustomTab herf="">
                    <Button sx={{ color: "gray" }}><HouseOutlined className={`Icons ${componentIndex === 0 ? "active" : ""}`} fontSize='2.3rem' onClick={() => setComponentIndex(0)} /></Button>
                    <Typography fontWeight="bold" >Feeds</Typography>
                </CustomTab>

                <CustomTab  sx={{ marginTop: ".7rem" }} >
                    <Button sx={{ color: "gray" }}><TextsmsOutlined className={`Icons ${componentIndex ===2 ? "active" : ""}`}  /></Button>
                    <Typography fontWeight="bold">Inbox</Typography>
                </CustomTab>

                <CustomTab sx={{ marginTop: ".7rem" }} >
                    <Button sx={{ color: "gray" }}>  <Badge badgeContent={4} color="primary">
                        <NotificationsOutlined className={`Icons ${componentIndex === 3 ? "active" : ""}`}  />
                    </Badge></Button>
                    <Typography fontWeight="bold" marginTop=".4rem">Notice</Typography>
                </CustomTab>

                <CustomTab sx={{ marginTop: ".7rem" }}>
                    <Button sx={{ color: "gray" }}><PermIdentityOutlined onClick={() => setComponentIndex(1)} className={`Icons ${componentIndex === 1 ? "active" : ""}`}  /></Button>
                    <Typography fontWeight="bold">Profile</Typography>
                </CustomTab>

                <CustomTab sx={{ marginTop: ".7rem" }} >
                    <Button sx={{ color: "gray" }}><SettingsOutlined className={`Icons ${componentIndex === 4 ? "active" : ""}`} /></Button>
                    <Typography fontWeight="bold">Settings</Typography>
                </CustomTab>


                <Box display='flex' justifyContent='center' marginTop='2rem'>
                    <Button variant="contained" sx={{ borderRadius: "2rem", bgcolor: "#9568DF", fontSize: '.8rem', padding: '.5rem 1rem' }} ><Add/>&nbsp;New Post</Button>

                </Box>
                <Box display='flex' justifyContent='center' marginTop='2rem'>
                    <Button variant="outlined" className='btn' sx={{ marginTop: "4rem", width: "8%", bgcolor: "white", border: "4px solid #F5F4F0", color: "gray", marginBottom: "2rem", paddingTop: ".8rem", paddingBottom: ".8rem", paddingLeft: ".6rem", paddingRight: ".6rem", borderRadius: ".7rem" }}><ExitToAppOutlined sx={{ fontSize: "2rem" }} /></Button>

                </Box>


            </Box>

        </>
    )
}

export default Sidebar