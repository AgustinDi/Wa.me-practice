import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

export default function Cards({arr, set}){
    const [pedido, setPedido] = useState({})

    function refresh(id, amount, title, size){
        if(amount === 0) return setPedido({...pedido,[id]: null})
        setPedido({...pedido,[id]: `${amount} x ${title} - ${size}\r\n`})
    }

    useEffect(()=>{
        set(pedido)
    },[pedido])

    return (
        <div id="cards">
            {arr.map(({img,title,id,size})=><Card img={img} title={title} key={id} refresh={refresh} id={id} size={size}/>)}
        </div>
    )
}