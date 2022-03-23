import React, {useState} from 'react';
import Counter from './Counter'

const CounterWrapper = () => {
    const settings = {
        START_VALUE: 0
    }

    const [counter, setCounter] = useState(settings.START_VALUE)

    const increment = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <Counter
                counter={counter}
                increment={increment}/>
        </div>
    );
};

export default CounterWrapper;