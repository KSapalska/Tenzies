import Die from "../components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  
  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      newDice.push({
        value:randomNumber, 
        isHeld: false,
        id: nanoid()
      });
    }
    return newDice;
  }
  function hold(id){

    setElements(oldDie=>elements.map(die=>id===die.id? {...die, isHeld :!die.isHeld} : die) )
   }

const [elements,setElements]= useState(generateAllNewDice());
const diceElements = elements.map(dieObj=><Die 
  key={dieObj.id} 
  value={dieObj.value}
   isHeld={dieObj.isHeld}
    hold={hold} 
    id={dieObj.id}
    />)

function rollNumbers(){
  setElements(oldDie=> elements.map(die=> die.isHeld === true ? die : {...die, value: Math.floor(Math.random() * 6) + 1 }) )
}


  return (
    <>
      <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
        </div>

        <button className="roll" onClick={rollNumbers}>Roll</button>
      </main>
    </>
  );
}
