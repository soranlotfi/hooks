import {useState,useMemo} from "react";
import Child from "./Child";


const UseMem = ()=>{
    const [value , setValue] = useState(0)
    function onClickHandle(){
        setValue(value+1)
    }
    const memoChild=useMemo(()=>{
        return(
            <Child/>
        )
    },[value])
    return(
        <div className="mem-container">
            <h3>use Memo</h3>
            <h2>value : {" "} {value}</h2>
            <button onClick={onClickHandle}>Increment value</button>
            <Child/>
            <h3>Memo render</h3>
            <h4>{memoChild}</h4>
        </div>

    )
}

export default UseMem