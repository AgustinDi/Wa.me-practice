import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Component/Cards';
import {data} from './Data/data.json'
require('dotenv').config()


function App() {
  const [pedido, setPedido] = useState({})
  let inicio = Object.values(pedido).some(item => item !== null) ? `Hola Cande! Me gustaria hacerte un pedido:\r\n` : `Hola Cande!`
  let pedidoFinal = Object.values(pedido).join('');
  let url = `https://wa.me/${process.env.REACT_APP_CELLPHONE}?text=${encodeURI(inicio+pedidoFinal.substring(0,pedidoFinal.length - 4))}`

  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wa.me</h1>
        <div>
          <Cards arr={data} set={setPedido}></Cards>
        </div>
        <h4>Mensaje:</h4>
        <p>{inicio}</p> 
        {Object.values(pedido).some(item => item !== null) 
        ?  
        <div>
          {Object.values(pedido).map(item=><p>{item}</p>)}
        </div>
        : null}
        {/* <p>{pedido.map(x=><>x</>)}</p> */}
        <a href={url}>
          {console.log(pedido)}
          <button>Enviar mensaje</button>
        </a>
      </header>
    </div>
  );
}

export default App;
