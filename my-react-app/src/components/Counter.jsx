import {useState} from 'react'


function Counter({ title }) {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount((previousCount)=> previousCount + 1);
    }

    const decrement = ()=>{
        setCount((previousCount)=> previousCount - 1);
    }

    const reset = ()=>{
        setCount(0);
    }

    return (
        <div>
            <h2>{title}</h2>
            <h2>Counter {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;