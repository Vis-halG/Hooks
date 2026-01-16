import React from 'react'
import { useState } from 'react'


function UseState() {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }
    return (
    <div>

        <h2>Count:- {count}</h2>
        <button onClick={handleClick}>increment</button>
    </div>
  )
}

export default UseState