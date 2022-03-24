import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";
import {settingType} from "./CounterWrapper";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

type propsType = {
    settings: settingType,
    setSettings: (settings: settingType) => void
}

export default function BasicCard({settings, setSettings}: propsType) {
    const [startValue, setStartValue] = useState(settings.DEFAULT_VALUE)
    const [maxValue, setMaxValue] = useState(settings.MAX_VALUE)

    const onStartValueFieldChanged = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onMaxValueFieldChanged = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const setBtnHandler = () => {
        if (startValue < maxValue) {
            setSettings({
                DEFAULT_VALUE: startValue,
                MAX_VALUE: maxValue
            })
        } else {
            console.log('error')
        }
    }

    return (
        <Card sx={{display: 'inline-block', mr: 1}}>
            <CardContent>
                <div>
                    <TextField
                        type="number"
                        id="standard-basic"
                        label="Start Value"
                        variant="standard"
                        value={startValue.toString()}
                        onChange={onStartValueFieldChanged}/>
                </div>
                <div>
                    <TextField
                        type="number"
                        id="standard-basic"
                        label="Max Value"
                        variant="standard"
                        value={maxValue.toString()}
                        onChange={onMaxValueFieldChanged}/>
                </div>

                {/*<Typography>*/}
                {/*    <TextField id="standard-basic" label="Max Value" variant="standard" value={0}/>*/}
                {/*</Typography>*/}

                {/*<Typography variant="h2" component="div">*/}
                {/*    300*/}
                {/*</Typography>*/}

            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={setBtnHandler}>Set</Button>
            </CardActions>
        </Card>
    );
}
