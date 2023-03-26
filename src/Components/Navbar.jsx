import { KeyboardArrowLeftOutlined, MoreHorizOutlined } from '@mui/icons-material';
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react'

const Navbar = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl]=useState(null)
  
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  

    const renderMobileMenu = (
      <Menu anchorEl={mobileMoreAnchorEl}  anchorOrigin={{  vertical: 'bottom',  horizontal: 'right',}} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose} >
        <MenuItem>
         <Typography >Copy Profile Link</Typography>
        </MenuItem>
        <MenuItem>
         <Typography >Block Profile</Typography>
        </MenuItem>
        <MenuItem>
         <Typography >Report</Typography>
        </MenuItem>
       
      </Menu>
    );
    return (
        <>
            <AppBar position="static" sx={{ boxShadow: "none", bgcolor: "#F1EEE5", marginTop:"2rem" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>


                     <Button variant="contained" sx={{ borderRadius: "1.9rem", marginLeft:"2rem" }}><KeyboardArrowLeftOutlined /></Button>

                        <Box sx={{ display: "flex" }}>

                            <Button variant="outlined" sx={{ color: "black", borderRadius: "1.9rem", border: "1px solid gray", marginRight:"2rem" }}>
                                <MoreHorizOutlined onClick={handleMobileMenuOpen} />
                            </Button>
                        </Box>
                        {renderMobileMenu}

                    </Toolbar>
                </Container>
            </AppBar>

        </>

    )
}

export default Navbar