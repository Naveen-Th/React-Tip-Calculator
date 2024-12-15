import React,{useState} from "react";

export const Tip = () => {
    const [input,setInput] =useState('');
    const [percentage,setPercentage] = useState(0);
    const [customRange,setCustomRange] = useState(0);
    const [people,setPeople] = useState(1);

    const handleInput = (e) =>{
        setInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault()
        setPercentage(customRange)
    }

    const handleRange = (e) => {
        setCustomRange(e.target.value);
    }

    const handlePeople = (e) => {
        setPeople(e.target.value)
    }
    return(
        <div className="container">
            <section className="total-bill">
                <h1>Tip Calculator</h1>
                <p>Total bill amount</p>
                <input type="text" placeholder="0.00" value={input} onChange={handleInput}/>
            </section>
            <section className="choose-tip">
                <p>Choose Tip {customRange}% </p>
                <input type="range" onChange={handleRange} />
                <button onClick={handleClick}>Set</button>
            </section>
            <section className="people">
                <input type="number" value={people} onChange={handlePeople}/>
                <button>Calculate</button>
            </section>
            <div>
                The Tip Per Person is ${Number(input)} {people}
            </div>
        </div>
        
    )
}