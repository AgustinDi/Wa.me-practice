import { useState } from 'react';
import './App.css';
import NumberPicker from './Component/NumberPicker.jsx';
require('dotenv').config()


function App() {
  const [text, setText] = useState('Texto');
  const [number, setNumber] = useState(0);
  let message = `${text} ${number}`
  let url = `https://wa.me/${process.env.REACT_APP_CELLPHONE}?text=${encodeURI(message)}`

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wa.me</h1>
        <div>
          Texto a enviar: <input type='text' onChange={x=>setText(x.target.value)}/>
        </div>
        <div>
          Numero de productos: <NumberPicker set={setNumber}/>
        </div>
        <h4>Mensaje:</h4>
        <p>{message}</p>
        <a href={url}>
          <button>Enviar mensaje</button>
        </a>
      </header>
    </div>
  );
}

export default App;
