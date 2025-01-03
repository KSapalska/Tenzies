import Die from "../components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'


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

const [elements,setElements]= useState(()=>generateAllNewDice());

const isAllTheSame= elements.every(die =>elements[0].value===die.value )
const isAllHeld = elements.every(die => die.isHeld === true)
let gameWon=false
const { width, height } = useWindowSize();

if (isAllTheSame && isAllHeld) {
  gameWon=true;
    
  }

const diceElements = elements.map(dieObj=><Die 
  key={dieObj.id} 
  value={dieObj.value}
   isHeld={dieObj.isHeld}
    hold={hold} 
    id={dieObj.id}
    />)

function rollNumbers(){
  gameWon ?  setElements(()=>generateAllNewDice()) :
  setElements(oldDie=> elements.map(die=> die.isHeld === true ? die : {...die, value: Math.floor(Math.random() * 6) + 1 }) )
}





  return (
    <>
      <main>
      {gameWon && <Confetti
        width={width}
        height={height}
      />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
        </div>

        <button className="roll" onClick={rollNumbers}>{gameWon ? "Game won!" : "Roll"}</button>
      </main>
    </>
  );
}
