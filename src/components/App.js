import React from 'react';
import { useState } from 'react';


const App = ()=>{
    let [inputvalue,setInputValue] = useState("");
    function renderInput(e){
        let numberValue = e.target;
        setInputValue(inputvalue+numberValue.innerText);

    }
    function calculateInput(){
        try{
            let ans = eval(inputvalue);
            setInputValue(ans);

        }
        catch(err){
            setInputValue("Invalid Input");
        }
        
        
    }
    function clearInput(){
        setInputValue("");
    }
    return(
        <div className='Calculator'>
        <h1>Calculator</h1>
        <input type='text' value={inputvalue} readOnly></input>
        <div className="btn-div">
        <button onClick={clearInput}>C</button>
        <button onClick={renderInput}>/</button>
        <button onClick={renderInput}>*</button>
        <button onClick={renderInput}>-</button>
        <button onClick={renderInput} id="btn-7">7</button>
        <button onClick={renderInput} id="btn-8">8</button>
        <button onClick={renderInput} id="btn-9">9</button>
        <button onClick={renderInput}>+</button>
        <button onClick={renderInput} id="btn-4">4</button>
        <button onClick={renderInput} id="btn-5">5</button>
        <button onClick={renderInput} id="btn-6">6</button>
        <button onClick={renderInput} id="btn-1">1</button>
        <button onClick={renderInput} id="btn-2">2</button>
        <button onClick={renderInput} id="btn-3">3</button>
        <button onClick={calculateInput}>=</button>
        <button onClick={renderInput}>0</button>
        <button onClick={renderInput}>.</button>

        </div>
        
        </div>

    )
    
}
export default App;

