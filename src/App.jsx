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

const [elements,setElements]= useState(generateAllNewDice());
const diceElements = elements.map(dieObj=><Die key={dieObj.id} value={dieObj.value}  />)

function rollNumbers(){
  setElements(generateAllNewDice())
}

  return (
    <>
      <main>
        <div className="dice-container">
          {diceElements}
        </div>

        <button className="roll" onClick={rollNumbers}>Roll</button>
      </main>
    </>
  );
}
