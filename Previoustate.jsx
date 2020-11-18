import React, {useState} from 'react'

function Previoustate() {
    const initialCount=0
    const [count, setCount]  = useState(initialCount)

    const IncrementTen = ()=>{
        for(let i=0;i<10;i++)
        {
              setCount (prevCount => prevCount + 1)
        }
    }



    return (
        <>
            count: {count}
            <button onClick ={ ()=> setCount(initialCount)}>Reset </button>
            <button onClick ={ ()=>  setCount (prevCount => prevCount + 1)}>Increment</button>
            <button onClick ={ ()=>  setCount (prevCount => prevCount - 1)}>Decrement </button>
            <button onClick ={IncrementTen}>IncrementTen</button>
        </>
    )
}

export default Previoustate
