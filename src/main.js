import React, {useState, useEffect, useRef} from "react";
import "./index.css"
function App(){
    const [result, setresult] = useState("");
    const inputref = useRef(null);
    useEffect (() => inputref.current.focus())
    function handlingclick(e){
        setresult(result.concat(e.target.value))   
    }
    function Remove() {
        setresult(result.slice(0, result.length-1))
    }
    function Clear() {
        setresult("")
    }
    function Result() {
        setresult(eval(result))
    }
    return(
        <div id= "calculator">
            <form>
                <input type = "text" value= {result} ref = {inputref}/>
            </form>
            <div id="keypad">
                <button onClick={Clear} id="clear">CLEAR</button>
                <button onClick = {Remove} id="remove">Remove</button>
                <button className = "btn" onClick = {handlingclick} value = "+">+</button>
                <button className = "btn" onClick = {handlingclick} value = "7">7</button>
                <button className = "btn" onClick = {handlingclick} value = "8">8</button>
                <button className = "btn" onClick = {handlingclick} value = "9">9</button>
                <button className = "btn" onClick = {handlingclick} value = "-">-</button>
                <button className = "btn" onClick = {handlingclick} value = "6">6</button>
                <button className = "btn" onClick = {handlingclick} value = "5">5</button>
                <button className = "btn" onClick = {handlingclick} value = "4">4</button>
                <button className = "btn" onClick = {handlingclick} value = "*">&times;</button>
                <button className = "btn" onClick = {handlingclick} value = "3">3</button>
                <button className = "btn" onClick = {handlingclick} value = "2">2</button>
                <button className = "btn" onClick = {handlingclick} value = "1">1</button>
                <button className = "btn" onClick = {handlingclick} value = "/">/</button>
                <button className = "btn" onClick = {handlingclick} value = "0">0</button>
                <button className = "btn" onClick = {handlingclick} value = ".">.</button>
                <button onClick = {Result} id="result">RESULT</button>
            </div>
        </div>

    )
};

export default App