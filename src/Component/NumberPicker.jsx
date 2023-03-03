import React, { useEffect, useState } from "react";

export default function NumberPicker({set}){
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        set(number)
    }, [number,set])

    return (
        <div className="NumberPicker">
        <input type='button' value='-' className="negativeButton" onClick={()=>setNumber(number !== 0 ? number-1 : 0)}/>
            <span>{number}</span>
        <input type='button' value='+' className="positiveButton" onClick={()=>setNumber(number+1)}/>
        </div>
    )
}