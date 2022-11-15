import React from "react";
import { useState, useEffect } from "react";
import Die from "../components/Die";
import "../css/TenziesApp.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function TenziesApp() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
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
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  //hold dice you choose
  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("win");
    }
  }, [dice]);

  return (
    <div className='tenzeieContainer'>
      {tenzies && <Confetti />}
      <div className='tenzeieWrapper'>
        <h1 className='tenziesTitle'>
          <span className='tenz'>T</span>en<span className='tenz'>z</span>ie
          <span className='tenz'>s</span>
        </h1>
        <p className='tenzInstructions'>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className='dieContainer'>{dices}</div>
        <button onClick={rollDice} className='tenzeieBtn'>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </div>
  );
}

export default TenziesApp;
