import React from "react";
import { useState } from "react";
import Die from "../components/Die";
import "../css/TenziesApp.css";
import { nanoid } from "nanoid";

function TenziesApp() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  //displayed all dice
  let dices = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      handleClick={() => holdDice(die.id)}
    />
  ));

  //roll dice
  function rollDice() {
    setDice(allNewDice());
  }

  //hold dice you choose
  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <div className='tenzeieContainer'>
      <div className='tenzeieWrapper'>
        <div className='dieContainer'>{dices}</div>
        <button onClick={rollDice} className='tenzeieBtn'>
          Roll
        </button>
      </div>
    </div>
  );
}

export default TenziesApp;
