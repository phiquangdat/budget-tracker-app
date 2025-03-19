import { useState } from "react";
import "./App.css";
import TransactionList from "./component/TransactionList/TransactionList";
import TransactionForm from "./component/TransactionForm";
function App() {
  const [list, setList] = useState([]);

  const [amount, setAmount] = useState(0.0);

  return (
    <div className="container">
      <h1>Budget tracker</h1>
      <div className="balance-box">
        <h3>Saldo</h3>
        <div id="balance">{amount} €</div>
      </div>
      <TransactionForm setAmount={setAmount} setList={setList} />
      <TransactionList setAmount={setAmount} list={list} setList={setList} />
      {/* <div>
        <canvas id="myChart"></canvas>
      </div> */}
    </div>
  );
}

export default App;
