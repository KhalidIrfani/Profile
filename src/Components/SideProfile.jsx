import { AddAPhotoOutlined, Close, GpsFixedOutlined, Person2 } from '@mui/icons-material'
import { Avatar, Button, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import profile from './Images/profile.jpg'
import React, { useState } from 'react'

const SideProfile = () => {

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValues, setSelectedValues] = useState('');


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handlerChange = (event) => {
        setSelectedValues(event.target.value);
    };
    return (
        <>
            <Box sx={{ borderBottom: "1px solid lightgray", display: "flex", justifyContent: "space-between" }}>
                <Typography fontSize="1.7rem" fontWeight="bold" margin="2rem">Edit Profile</Typography>
                <Button sx={{ height: "10vh", marginTop: "1rem", color: "black" }}><Close /></Button>
            </Box>

            <Box marginLeft="1rem">

                <Box sx={{ display: "flex", marginTop: "2rem" }}>
                    <Avatar sx={{ width: "5rem", height: "5rem", borderRadius: "1.5rem", alignItems: "center", textAlign: "center", marginLeft: { xs: "0rem", md: "1rem" } }}>
                        <img src={profile} alt="profile" height="85vh" />
                    </Avatar>
                    <Button variant='outlined' sx={{ color: "#9568DF", marginLeft: ".7rem", fontWeight: 'bold', fontSize: ".7rem", height: "45px", marginTop: "1rem", textDecoration: "underline", border: "3px solid #9568DF", borderRadius: "2.5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "0rem", paddingBottom: "0rem" }} startIcon={<AddAPhotoOutlined style={{ fontSize: "1rem" }} />}>Upload Avatar</Button>
                </Box>

                <Box>
                    <label><Typography sx={{ fontWeight: "bold", fontSize: "1rem", marginLeft: "1.7rem", marginTop: "2rem" }}>Location</Typography></label>
                    <TextField placeholder="Dhaka, Bangladesh" InputProps={{
                        startAdornment: (<InputAdornment position="start">     <GpsFixedOutlined />   </InputAdornment>
                        ),
                    }}
                        sx={{ borderRadius: "1rem", marginLeft: "1.5rem", marginTop: ".4rem", width: "80%", height: "3rem", '& fieldset': { borderRadius: '1rem', border: "1px solid black", height: "3.3rem" }, bgcolor: "white" }}
                    />
                </Box>
                <Box>
                    <label><Typography sx={{ fontWeight: "bold", fontSize: "1rem", marginLeft: "1.7rem", marginTop: "1rem" }}>Profession</Typography></label>
                    <TextField select value={selectedValues}
                        onChange={handlerChange}
                        placeholder="Dhaka, Bangladesh" sx={{
                            borderRadius: "1rem", width: "80%", '& .Mui-selected': {
                                bgcolor: '#9568DF',
                                color: 'white',
                                borderRadius:".5rem", padding:".3rem", marginBottom:"1rem"
                            },'& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{marginBottom:"-.3rem"
                            },
                            '& .Mui-selected': {
                                bgcolor: '#9568DF',
                                color: 'white',
                                borderRadius:".5rem"
                            },
                             '& fieldset': { borderRadius: '1rem', border: "1px solid black", height: "3.2rem" }, borderRadius: "1rem", marginLeft: "1.5rem", marginTop: ".4rem", bgcolor: "white", height: "2.8rem"
                        }}>
                        <MenuItem value="teacher"> <span style={{ color: selectedValues === 'teacher' ? 'white' : 'black', backgroundColor: selectedValues === 'teacher' ? '#9568DF' : 'inherit', borderRadius:".5rem", padding:".3rem", marginBottom:"1rem"}}
                        >Teacher</span></MenuItem>
                        <MenuItem value="developer"> <span style={{ color: selectedValues === 'developer' ? 'white' : 'black', backgroundColor: selectedValues === 'developer' ? '#9568DF' : 'inherit', borderRadius:".5rem", padding:".3rem", marginBottom:"1rem"}}
                        >Developer</span></MenuItem>
                        <MenuItem value="any"> <span style={{ color: selectedValues === 'any' ? 'white' : 'black', backgroundColor: selectedValues === 'any' ? '#9568DF' : 'inherit', borderRadius:".5rem", padding:".3rem", marginBottom:"1rem"}}
                        >Any</span></MenuItem>
                    </TextField>
                </Box>

                <Box>
                    <label><Typography sx={{ fontWeight: "bold", fontSize: "1rem", marginLeft: "1.7rem", marginTop: "1rem" }}>Interest</Typography></label>
                    <TextField select value={selectedValue}
                        onChange={handleChange}
                        placeholder="Dhaka, Bangladesh" sx={{
                            borderRadius: "1rem", width: "80%", '& .Mui-selected': {
                                bgcolor: '#9568DF',
                                color: 'white',
                                borderRadius:".5rem", padding:".5rem"
                            },  
                            '& .Mui-selected': {
                                bgcolor: '#9568DF',
                                color: 'white',
                                
                            },
                             '& fieldset': { borderRadius: '1rem', border: "1px solid black", height: "3.2rem" }, borderRadius: "1rem", marginLeft: "1.5rem", marginTop: ".4rem", bgcolor: "white", height: "2.8rem"
                        }}>
                        <MenuItem value="fashion"> <span style={{ color: selectedValue === 'fashion' ? 'white' : 'black', backgroundColor: selectedValue === 'fashion' ? '#9568DF' : 'inherit', borderRadius:".5rem", padding:".3rem"}}
                        > Fashion Design</span></MenuItem>
                        <MenuItem value="graphic"> <span style={{ color: selectedValue === 'graphic' ? 'white' : 'black', backgroundColor: selectedValue === 'graphic' ? '#9568DF' : 'inherit', borderRadius:".5rem", padding:".3rem"}}
                        > Graphic Design</span></MenuItem>
                        <MenuItem value="Web"> <span style={{ color: selectedValue === 'Web' ? 'white' : 'black', backgroundColor: selectedValue === 'Web' ? '#9568DF' : 'inherit', borderRadius:".5rem", padding:".3rem"}}
                        > Web Design</span></MenuItem>
                         
                    </TextField>
                </Box>

                <Box>
                    <label><Typography sx={{ fontWeight: "bold", fontSize: "1rem", marginLeft: "1.5rem", marginTop: "2rem" }}>Location</Typography></label>
                    <TextField placeholder="Imran Hossein" InputProps={{
                        startAdornment: (<InputAdornment position="start"><Person2 /></InputAdornment>
                        ),
                    }}
                        sx={{ borderRadius: "1rem", height: "3rem", marginLeft: "1.5rem", marginTop: ".4rem", width: "80%", '& fieldset': { borderRadius: '1rem', border: "1px solid black", height: "3.2rem" }, bgcolor: "white" }}
                    />
                </Box>

                <Box>
                    <label><Typography sx={{ fontWeight: "bold", fontSize: "1rem", marginLeft: "1.5rem", marginTop: "2rem" }}>Bio</Typography></label>
                    <textarea defaultValue="This is the default value."
                        Rows={5} style={{ borderRadius: "1rem", width: "80%", borderRadius: "1rem", marginLeft: "1.5rem", marginTop: ".4rem", bgcolor: "white" }} />
                </Box>

            </Box>
            <Box display="center" justifyContent="center">
                <Button variant='contained' sx={{ color: "white", bgcolor: "#9568DF", borderRadius: "2rem", paddingLeft: "6rem", paddingRight: "6rem", marginTop: "11rem", }}>Save</Button>

            </Box>


        </>
    )
}

export default SideProfile