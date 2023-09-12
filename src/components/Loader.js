import React from 'react';
import {Box, Button, Container, Grid, TextField} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid
                      container
                      alignItems={'center'}
                      direction={"column"}
                >
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;