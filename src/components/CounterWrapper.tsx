import React, {useEffect, useState} from 'react';
import Counter from './Counter'
import Settings from "./Settings";
import {Container} from "@mui/material";

export type settingType = {
    DEFAULT_VALUE: number
    MAX_VALUE: number
}

const CounterWrapper = () => {

    const [settings, setSettings] = useState({
        DEFAULT_VALUE: 0,
        MAX_VALUE: 3
    } as settingType)

    const [counter, setCounter] = useState(settings.DEFAULT_VALUE)

    useEffect(() => setCounter(settings.DEFAULT_VALUE), [settings])

    const increment = () => {
        counter < settings.MAX_VALUE &&
        setCounter(counter + 1)
    }

    const restCounterToDefaultValue = () => {
        setCounter(settings.DEFAULT_VALUE)
    }

    const stopCount = counter >= settings.MAX_VALUE

    return (
        <>
            <Counter
                counter={counter}
                increment={increment}
                restCounterToDefaultValue={restCounterToDefaultValue}
                stopCount={stopCount}/>
            <Settings
                settings={settings}
                setSettings={setSettings}/>
        </>
    );
};

export default CounterWrapper;