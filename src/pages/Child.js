import {useEffect} from "react";

let renderCount = 0
export default  function Child(){
useEffect(()=>{
    renderCount++;
})
    return(
        <div>
            <h4>renderCount{" "} : {renderCount}</h4>
        </div>
    )
}