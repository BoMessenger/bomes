import React, {useContext, useRef} from 'react';
import {Box, Button, Container, Grid, TextField} from "@mui/material";
import {Context} from "../index";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

const Login = () => {
    const auth = getAuth()
    const email = useRef("")
    const password = useRef("")

    const login =  () => {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const {user} = userCredential.user;
                console.log(userCredential.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
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
                        <TextField fullWidth id="outlined-basic" label="Почта" variant="outlined" margin="dense" inputRef={email}/>
                        <TextField fullWidth id="outlined-basic" label="Пароль" variant="outlined" margin="dense" inputRef={password}/>
                    </Box>
                    <Box p={5}>
                        <Button onClick={login} variant={"contained"}>
                            Войти
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;