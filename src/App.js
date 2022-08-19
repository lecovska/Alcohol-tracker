import React, { useState } from 'react';
import './App.css';
import drinks from "./Images/opac.png"

function App() {

  const [amount, setAmount] = useState("");

  const [percent, setPercent] = useState("");

  const [weight, setWeight]= useState("");

  function changeHandler(event) {
    setAmount(event.target.value);
  }

  function percents(event){
    setPercent(event.target.value);
  }

  function weights(event){
    setWeight(event.target.value);
  }

const res = ()=>(amount * percent * 0.75 / weight).toFixed(2);

let status=(amount * percent * 0.75 / weight).toFixed(2);

function message(){
  
  if(status>0.3){
    return "Put nastavi taksijem, autobusom ili peske"
  }else if(status<0.3){
    return "Mozes da vozis "
  }
}


  return (
    <div className="app">
      <div className='content'>
        <h2 className='naslov'>ALCOHOL TRACKER</h2>
      <p>KOLIČINA</p>
      <input type="number" value={amount} onChange={changeHandler} placeholder="Ukupno popijenih casa"></input>
      <p>PROCENAT ALKOHOLA</p>
      <input type="number" value={percent} onChange={percents}placeholder="%"></input>
      <p>TEŽINA</p>
      <input type="number" value={weight} onChange={weights} placeholder="kg"></input>
      <div className='displayRes'>{res()}<span>&#8240;</span></div>
      <button className="button-30" onClick={res()}>Izračunaj</button>
      <div className='message'>{message()}</div>
      </div>
    </div>
  );
}

export default App;
