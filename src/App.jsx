import { useState, useRef, useContext } from "react";
import BudgetAppProvider, {
  BudgetAppContext,
} from "./context/BudgetAppContext";
import "./App.css";
import TransactionList from "./component/TransactionList/TransactionList";
import TransactionForm from "./component/TransactionForm";
import Confirmation from "./component/Confirmation/Confirmation";
function App() {
  const { state } = useContext(BudgetAppContext);

  return (
    <div className="container">
      <h1>Budget tracker</h1>
      <div className="balance-box">
        <h3>Saldo</h3>
        <div id="balance">{state.sum} €</div>
      </div>
      <TransactionForm />
      <TransactionList />
      {/* <div>
        <canvas id="myChart"></canvas>
      </div> */}
    </div>
  );
}

export default App;
