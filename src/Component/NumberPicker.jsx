import React, { useEffect, useState } from "react";

export default function NumberPicker({set}){
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        set(number)
    }, [number,set])

    return (
        <div id="NumberPicker">
        <input type='button' value='+' onClick={()=>setNumber(number+1)}/>
            {number}
        <input type='button' value='-' onClick={()=>setNumber(number !== 0 ? number-1 : 0)}/>
        </div>
    )
}