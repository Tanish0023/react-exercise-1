import { useState } from "react";

const VotingEligibility = () => {
    const [age, setAge] = useState(0);
    const [message,setMessage] = useState('');

    function handleClick(e){
        e.preventDefault();
        console.log("hello");


        if(parseInt(age) >= 18 && parseInt(age) <= 100){
            setMessage("You are eligible to vote 🎉");
        }
        else if(parseInt(age) === 0){
            setMessage("Welcome to the earth 🌍")
        }
        else if(parseInt(age) < 0){
            setMessage("Brooo start now or you will never get into IIT stop wasting your time 💀");
        }
        else if(parseInt(age) > 100){
            setMessage("You are too old to vote 🪦");
        }
        else{
            setMessage("You are too young to vote 🍼");
        }

    }

    return ( 
        <>  
            <form onSubmit={handleClick}>
                <label>Enter your Age: </label>
                <input type="number" name="Age"
                onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
                <div>
                    {message && <h1>
                        {message}
                        </h1>}
                </div>
            </form>
        </>
     );
}
 
export default VotingEligibility;