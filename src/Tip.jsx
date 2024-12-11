import React,{useState} from "react";

export const Tip = () => {
    const [input,setInput] = useState('');
    const [percentage1,setPercentage1] = useState(0);
    const [percentage2,setPercentage2] = useState(0);
    const [select,setSelect] = useState(0);
    const [isopen,setisOpen] = useState(false);

    const tip = Number(input * ((percentage1 + percentage2) / select / 100) );

    const selected = () => {
        setSelect((select)=>select+1)
    }
    
    const onReset = () => {
        setInput(0);
        setPercentage1(0);
        setPercentage2(0);
        tip = 0;
    }

    const open = () => {
        setisOpen(!isopen)
    }
    return(
        <>
           <BillInput input={input} setInput={setInput}></BillInput> 

           <Select percentage={percentage1} setPercentage={setPercentage1} selected={selected}>
            How did you like the service 
            </Select>

            <button onClick={open}>Friend</button>

            { isopen &&
            <Select percentage={percentage2} setPercentage={setPercentage2} selected={selected}>
            How did your friend like the service 
            </Select>
            }
            
           <Output input={input} tip={tip}></Output>

           <Reset onReset={onReset}></Reset>
        </>
    )
}

export const BillInput = ({input,setInput}) => {

    const onChange = (e) => {
        setInput(Number(e.target.value))
    }
    return(
        <>
            <label>How much of a Tip  </label>
            <input type="text"  onChange={onChange} value={input} placeholder="Enter a Price"/>
        </>
    )
}


export const Select = ({children,percentage,setPercentage,selected}) => {
    
    return(
        <>
            <div>
            <label> { children } </label>
                <select  onChange={e => setPercentage(Number(e.target.value))} value={percentage} onFocusCapture={selected}>
                    <option value='0'>Dissatified 0$</option>
                    <option value='5'>Average 5$</option>
                    <option value='10'>Good 10$</option>
                </select>
            </div>
        </>
    )
}



export const Output = ({tip}) => {
    return(
        <>
            <h1>Tip : {Number(tip)}</h1>
        </>
    )
}

export const Reset = ({onReset}) => {
    return(
        <>
        <button onClick={onReset}>Reset</button>
        </>
    )
}

