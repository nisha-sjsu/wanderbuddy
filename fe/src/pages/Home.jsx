import { Search } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from '../components/Header';
import Image from "../components/Image";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

const HomeContainer = () => {
    const navigate = useNavigate();
    const signup = () => {
        navigate('/registration');
    }
    const login = () => {
        navigate('/login');
    }
    const searchTrips = () => {
        navigate('/trips/search');
    }
    return (
        <>
            <Header />
            <Container>
                <Grid container my={6}>
                    <Grid item xs={6} textAlign='initial' px={2} >
                        <Typography variant="h4" py={2} style={{ wordSpacing: '8px', fontWeight: 'bold' }} >
                            Discover, Connect, and Explore the World.
                        </Typography>
                        <Typography py={2} style={{ wordSpacing: '8px', fontWeight: 'bold' }} lineHeight={2}>
                            Discover nearby trips, choose your favorite, and collaborate with trip owners through WanderBuddy.</Typography>
                        <Typography style={{ wordSpacing: '8px', fontWeight: 'bold' }} lineHeight={2}>
                            Easily find trips by entering your desired destinations and travel dates, and connect with other travelers using WanderBuddy.</Typography>
                        <Typography py={2} style={{ wordSpacing: '8px', fontWeight: 'bold' }} lineHeight={2}>
                            Join exciting trips shared by fellow travelers on WanderBuddy, collaborate with trip owners, and make unforgettable memories. </Typography>
                        <Typography py={2} style={{ wordSpacing: '8px', fontWeight: 'bold' }} lineHeight={2}>
                            Simplify your trip planning process with WanderBuddy - find potential trips, choose the ones you like, and connect with trip owners for a seamless travel experience.
                        </Typography>

                    </Grid>
                    <Grid item xs={6} px={2} display='flex' alignItems='center' paddingLeft={20}>
                        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                            <ListItem>
                                <Button variant="outlined" onClick={signup}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Register" secondary="Join the Community" />
                                </Button>
                            </ListItem>
                            <ListItem style={{ marginTop: '36px' }}>
                                <Button variant="outlined" onClick={login}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FollowTheSignsIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="login" secondary="Already a member" />
                                </Button>
                            </ListItem>

                            <ListItem style={{ marginTop: '36px' }}>
                                <Button variant="outlined" endIcon={<Search />} onClick={searchTrips}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <BeachAccessIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Search Tours" secondary="Find Your Next Journey" />
                                </Button>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
            <Footer />

        </>
    );
}

export default HomeContainer;