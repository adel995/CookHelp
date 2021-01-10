import React, { useState } from 'react'

export default function Counter({ intitialNum }) {
    const [count, setCount] = useState(intitialNum)
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}
