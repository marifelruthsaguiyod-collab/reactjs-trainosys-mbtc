import { useState, useEffect } from "react";

const MousePosition = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect() has been called!')
    })

return (
    <>
        <div className="useeffect-component">
            <h2>useEffect() Component</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(count - 1)}>Decrement Count</button>
            <br />
        </div>
    </>

)};

export default MousePosition;
