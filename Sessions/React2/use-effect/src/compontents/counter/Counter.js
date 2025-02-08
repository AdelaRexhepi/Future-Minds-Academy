import { useEffect, useState } from 'react';
import './Counter.css'

function Counter(){
    const [running, setRunning] = useState(false)
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => setCounter(counter => counter + 1), 1000);

        return () => clearInterval(interval);
    }, [running]);

    return <div className='Counter'>
        <h2 >{counter}</h2>
        <button className='Counter-Toggle' onClick={() => setRunning(running => !running)}>{running ? 'Stop' : 'Start'}</button>
    </div>
}

export default Counter;
