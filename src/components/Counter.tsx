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

type propsType = {
    counter: number
    increment: () => void
    restCounterToDefaultValue: () => void
    stopCount: boolean
}

export default function BasicCard(
    {
        counter,
        increment,
        restCounterToDefaultValue,
        stopCount
    }: propsType) {

    const incrementBtnHandler = () => {
        increment()
    }

    return (
        <Card sx={{display: 'inline-block', mr: 2}}>
            <CardContent>
                <Typography variant="h2" component="div" className={stopCount ? 'redText' : ''}>
                    {counter}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={incrementBtnHandler} disabled={stopCount}>Increment</Button>
                <Button variant="contained" onClick={restCounterToDefaultValue}>Reset</Button>
            </CardActions>
        </Card>
    )
        ;
}
