import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Box, Button, Container, Grid, TextField} from "@mui/material";
import {getDatabase, ref, set, push, onChildAdded} from "firebase/database";

const Chat = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const db = getDatabase()
    const refer = ref(db,"TestPathWeb")
    const [value, setValue] = useState("")
    const messages = []
    const sendMessage = async () => {
        push(refer, value).then(r => {})
        setValue("")
    }
    onChildAdded(refer, (snapshot, prevChildKey) => {
        const newPost = snapshot.val();
        messages.push(newPost)
    });

    return (
        <div>
            <Container>
                <Grid container
                      style={{height: window.innerHeight - 50, marginTop: 20}}
                      justifyContent={'center'}
                >
                    <div style={{width: '80%', height:'70vh', border: '1px solid gray', overflowY: 'auto'}}>
                        {
                            messages.map(message =>
                                <div style={{margin: 20}}>
                                    <Grid container>
                                        <div>{"Username"}</div>
                                    </Grid>
                                    <div>{message}</div>
                                </div>
                            )
                        }
                    </div>
                    <Grid
                        container
                        direction={'column'}
                        alignItems={'flex-end'}
                        style={{width: '80%'}}
                    >
                        <TextField fullWidth value={value} onChange={e => setValue(e.target.value)} maxRows={4} variant={'outlined'}/>
                        <Button onClick={sendMessage} variant={"contained"}>Отправить</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Chat;