import {React, useState} from 'react';
import axios from 'axios';
import "../../../src/App.css"

function Dice() {

  const [dice, setdice] = useState("0");

  function handleOnclick(){
    let num =Math.floor((Math.random()*6)+1);
    console.log(num);
    let val = parseFloat(dice) + num;
    console.log(val);
    let sum = val.toString();
    setdice(sum);

  }

  return (
    <div className='main'>
      {/* <h1>Welcome</h1>
      <h1 className='path1'>Sign in to</h1>
      <input type="text" placeholder='Enter mail or user name' className='rectangle-3'/>
      <input type="password" placeholder='password' className='rectangle-4' />
      <button className='rectangle-6'>Login</button> */}
      <p>{score: ${dice}}</p>
      <button onClick={handleOnclick}>roll</button>
    </div>
  )
}

export default Dice;