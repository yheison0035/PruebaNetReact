import React from "react";
import { bindActionCreators } from "redux";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionsCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button
        onClick={() => {
          depositMoney(1000);
        }}
      >
        deposit
      </button>
      <button
        onClick={() => {
          withdrawMoney(500);
        }}
      >
        withdraw
      </button>
      <button
        onClick={() => {
          bankrupt();
        }}
      >
        bankroupt
      </button>
    </div>
  );
}

export default App;
