import React from 'react';
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Profile = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                      container
                      alignItems={'center'}
                      direction={"column"}
                >
                    <Box p={5}>
                        <Typography variant="h1" component="h2">
                            h1. Heading
                        </Typography>;
                        <TextField fullWidth id="outlined-basic" label="Пароль" variant="outlined" margin="dense"/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;