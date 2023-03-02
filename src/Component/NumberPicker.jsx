import React, { useState } from "react";

export default function NumberPicker(){
    const [number, setNumber] = useState(0);
    return (
        <div id="NumberPicker">
        <input type='button' value='+' onClick={()=>setNumber(number+1)}/>
            {number}
        <input type='button' value='-' onClick={()=>setNumber(number !== 0 ? number-1 : 0)}/>
        </div>
    )
}