import { useState, useRef } from "react";
import "./App.css";
import TransactionList from "./component/TransactionList/TransactionList";
import TransactionForm from "./component/TransactionForm";
import Confirmation from "./component/Confirmation/Confirmation";
function App() {
  const [list, setList] = useState([]);
  const confirm = useRef();
  const [amount, setAmount] = useState(0.0);

  return (
    <div className="container">
      <h1>Budget tracker</h1>
      <div className="balance-box">
        <h3>Saldo</h3>
        <div id="balance">{amount} €</div>
      </div>
      <TransactionForm setAmount={setAmount} setList={setList} />
      <TransactionList
        ref={confirm}
        setAmount={setAmount}
        list={list}
        setList={setList}
      />
      <Confirmation ref={confirm} />
      {/* <div>
        <canvas id="myChart"></canvas>
      </div> */}
    </div>
  );
}

export default App;
