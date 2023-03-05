import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Component/Cards';
import {data} from './Data/data.json';
import git from './github.png';
require('dotenv').config()


function App() {
  const [pedido, setPedido] = useState({})
  let inicio = Object.values(pedido).some(item => item !== null) ? `Hola Cande! Me gustaria hacerte un pedido:\r\n` : `Hola Cande! tengo una consulta:`
  let pedidoFinal = Object.values(pedido).join('');
  let url = `https://wa.me/${process.env.REACT_APP_CELLPHONE}?text=${encodeURI(inicio+pedidoFinal.substring(0,pedidoFinal.length - 2))}`

  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wa.me - Practice</h1>
        *recomendado usar en el celular
        <Cards arr={data} set={setPedido}></Cards>
        <a href={url}>
          <button id='enviarMensaje'>Hacer el pedido</button>
        </a>
        <a href='https://github.com/AgustinDi/wa.me-practice'>
          <img src={git} id='gitImage'></img>
        </a>
      </header>
    </div>
  );
}

export default App;
