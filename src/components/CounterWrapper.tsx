import React, {useState} from 'react';
import Counter from './Counter'
import Settings from "./Settings";
import {Container} from "@mui/material";

const CounterWrapper = () => {
    // const settings = {
    //     DEFAULT_VALUE: 0
    // }
    const [settings, setSettings] = useState({
        DEFAULT_VALUE: 0,
        MAX_VALUE: 3
    })


    const [counter, setCounter] = useState(settings.DEFAULT_VALUE)


    const increment = () => {
        counter < settings.MAX_VALUE &&
        setCounter(counter + 1)
    }

    const restCounterToDefaultValue = () => {
        setCounter(settings.DEFAULT_VALUE)
    }

    const stopCount = counter >= settings.MAX_VALUE ? true : false

    return (
        <>
            <Counter
                counter={counter}
                increment={increment}
                restCounterToDefaultValue={restCounterToDefaultValue}
                stopCount={stopCount}/>
            <Settings/>
        </>
    );
};

export default CounterWrapper;