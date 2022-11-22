import React from "react";
import { useReducer } from "react";
import DigitButton from "../components/DigitButton";
import OperationButton from "../components/OperationButton";
import "../css/Calcluator.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLAER: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currOperand?.includes(".")) {
        return state;
      }
      if (payload.digit === "." && state.currOperand === undefined) {
        return {
          ...state,
          currOperand: `0${payload.digit}`,
        };
      }
      return {
        ...state,
        currOperand: `${state.currOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currOperand == null && state.prevOperand == null) {
        return state;
      }
      if (state.currOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.currOperand,
          currOperand: null,
        };
      }
      return {
        ...state,
        prevOperand: evaluate(state),
        operation: payload.operation,
        currOperand: null,
      };

    case ACTIONS.EVALUATE:
      return {
        ...state,
        currOperand: evaluate(state),
        prevOperand: null,
        operation: null,
      };

    case ACTIONS.CLAER:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.currOperand?.length > 0) {
        return {
          ...state,
          currOperand: state.currOperand.slice(0, -1),
        };
      }
      return {};
  }
}

function evaluate({ currOperand, prevOperand, operation }) {
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currOperand);
  if (isNaN(prev) || isNaN(current)) return current;
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }
  return computation.toString();
}

function Calculator() {
  const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className='calculatorContainer'>
      <div className='calculatorGrid'>
        <div className='output'>
          <div className='prevOpernad'>
            {prevOperand} {operation}
          </div>
          <div className='currOperand'>{currOperand}</div>
        </div>
        <button
          onClick={() => dispatch({ type: ACTIONS.CLAER })}
          className='span-two'
        >
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
        <OperationButton operation='÷' dispatch={dispatch} />
        <DigitButton digit='1' dispatch={dispatch}></DigitButton>
        <DigitButton digit='2' dispatch={dispatch}></DigitButton>
        <DigitButton digit='3' dispatch={dispatch}></DigitButton>
        <OperationButton operation='*' dispatch={dispatch} />
        <DigitButton digit='4' dispatch={dispatch}></DigitButton>
        <DigitButton digit='5' dispatch={dispatch}></DigitButton>
        <DigitButton digit='6' dispatch={dispatch}></DigitButton>
        <OperationButton operation='+' dispatch={dispatch} />
        <DigitButton digit='7' dispatch={dispatch}></DigitButton>
        <DigitButton digit='8' dispatch={dispatch}></DigitButton>
        <DigitButton digit='9' dispatch={dispatch}></DigitButton>
        <OperationButton operation='-' dispatch={dispatch} />
        <DigitButton digit='.' dispatch={dispatch}></DigitButton>
        <DigitButton digit='0' dispatch={dispatch}></DigitButton>
        <button
          className='span-two equally'
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
