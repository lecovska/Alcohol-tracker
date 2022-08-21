import React, { useState } from 'react';
import './App.css';
import drinks from "./Images/opac.png"
import wine from "../src/Images/wine.png"
import beer from "../src/Images/beer.png"
import wiskey from "../src/Images/wiskey.png"
import rakia from "../src/Images/rakia.png"


function App() {

  const [amount, setAmount] = useState("");

  const [percent, setPercent] = useState("");

  const [weight, setWeight] = useState("");


  // const drinks = [
  //   {
  //     image: 'sdfhgghsdhsdhgh',
  //     volume: 0.5,
  //     percent: 5
  //   }
  // ];

  // const svaPica = [];
  // svaPica.push({
  //   amount: 1,
  //   volume: 0.5,
  //   percent: 5
  // });

  const drinks = [
    {
        image: wine,
        amount: 1,
        volume: 140,
        percent: 12,
    },
    {
        image: beer,
        amount: 1,
        volume: 500,
        percent: 5,
    },
    {
        image: wiskey,
        amount: 1,
        volume: 60,
        percent: 40,
    },
    {
        image: rakia,
        amount: 1,
        volume: 300,
        percent: 45,
    }
]

  function changeHandler(event) {
    setAmount(event.target.value);
  }

  function percents(event) {
    setPercent(event.target.value);
  }

  function weights(event) {
    setWeight(event.target.value);
  }

  const res = () => {

    if (amount !== undefined && percent !== undefined && weight)
    {
      return (amount * percent * 0.75 / weight).toFixed(2) + "‰";
    }

    return "";
  }

  let status = (amount * percent * 0.75 / weight);

  function message() {

    if (isNaN(status) || status === Infinity )
    {
      return "";
    }

    if (status >= 0.2) {
      return "Put nastavi taksijem, autobusom ili peske"
    } else {
      return "Mozes da vozis"
    }
  }


  return (
    <div className="app">
      <div className='content'>
        <h2 className='naslov'>ALCOHOL TRACKER</h2>
        <p>KOLIČINA</p>
        <input type="number" value={amount} onChange={changeHandler} placeholder="Ukupno popijenih casa"></input>
        <p>PROCENAT ALKOHOLA</p>
        <input type="number" value={percent} onChange={percents} placeholder="%"></input>
        <p>TEŽINA</p>
        <input type="number" value={weight} onChange={weights} placeholder="kg"></input>
        <div className='displayRes'>{res()}</div>
        {/* <button className="button-30" onClick={res()}>Izračunaj</button> */}
        {status > 0.3 ? <div id="message2">{message()}</div> : <div className='message'>{message()}</div>}
      </div>
      </div>
  );
}

export default App;
