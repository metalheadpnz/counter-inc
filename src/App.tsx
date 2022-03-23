// import React from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './components/AppBar'
import {Container, Paper} from "@mui/material";
import CounterWrapper from "./components/CounterWrapper";


function App() {
    return (
        <div>
            <AppBar/>
            <Container maxWidth="sm" sx={{marginTop: '1rem'}}>
                <CounterWrapper/>
            </Container>
        </div>
    );
}

export default App;
