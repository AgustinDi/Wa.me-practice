import React, { useEffect, useState } from "react";
import NumberPicker from './NumberPicker.jsx'

export default function Card({img, title, refresh, id, size}){
    const [amount, setAmount] = useState(0);

    useEffect(()=>{
        refresh(id, amount, title, size)
    }, [amount])

    return (
        <div className="card">
            <img src={img} alt={title} className='img'/>
            <p className="title">{title} - {size}</p>
            <NumberPicker set={setAmount}/>
        </div>
    )
}