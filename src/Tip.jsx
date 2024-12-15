import React,{useState} from "react";

export const Tip = () => {
    const [input,setInput] = useState('');
    const [percentage,setPercentage] = useState(0);
    const [people,setPeople] = useState(1);
    const [submit,setSubmit] = useState();

    const handleInput = (e) =>{
        setInput(e.target.value >= 1 ? e.target.value : 1);
    }

    const handleRange = (e) => {
        setPercentage(e.target.value);
    }

    const handlePeople = (e) => {
        const value = Number(e.target.value);
        setPeople(value >= 0 ? value : 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const tip = (Number(input) * (percentage/100)) / people ;
        console.log(tip)
        setSubmit(tip.toFixed(2));
    }
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <section className="total-bill">
                    <h1>Tip <br></br> Calculator</h1>
                    <p>Total bill amount</p>
                    <input type="text" placeholder="0.00" value={input} onChange={handleInput}/> 
                </section>
                <section className="choose-tip">
                    <p>Choose Tip {percentage}% </p>
                    <input type="range" onChange={handleRange} />
                </section>

                <section className="people">
                    <p>Number of people sharing</p>
                    <input type="number" value={people} onChange={handlePeople}/> <br></br>
                    <button className="btn" type="submit">Calculate</button>
                </section>
            </form>
            { input >= 1 && percentage >= 1&& people >= 1 ?
                <div>
                    <p>The Tip Per Person is ${submit} </p>
                </div>
               : <p>Please enter all values</p> 
            }
        </div>
        
    )
}