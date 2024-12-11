import React,{useState} from "react";

export const Parent = () => {
    const [count,setCount] = useState(0);

    const incr = () => {
        setCount(count+1);
    }
    const decr = () => {
        setCount(count!=1 ? count - 1 : 0);
    }
    return(
        <>  
            <Child incr={incr} decr={decr}></Child>
        </>
    )
}

const Child = ({incr,decr}) => {
    return(
        <>
            <button onClick={incr}>+</button>
            <button onClick={decr}>-</button>
        </>
    )
}
