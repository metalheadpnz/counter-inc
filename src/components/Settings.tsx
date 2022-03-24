import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

type propsType = any
// type propsType = {
//     counter: number
//     increment: () => void
//     restCounterToDefaultValue: () => void
// }

export default function BasicCard(
    {
        counter,
        increment,
        restCounterToDefaultValue
    }: propsType) {

    const incrementBtnHandler = () => {
        increment()
    }
    // sx={{minWidth: 275}}
    //sx={{ display: 'inline-block', m: 1}}
    return (
        <Card sx={{ display: 'inline-block', mr: 1}}>
            <CardContent>
                <Typography variant="h2" component="div">
                    300
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={incrementBtnHandler}>Increment</Button>
                <Button variant="contained" onClick={restCounterToDefaultValue}>Reset</Button>
            </CardActions>
        </Card>
    );
}
