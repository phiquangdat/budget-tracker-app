import { useState } from "react";
import "./App.css";
import TransactionList from "./component/TransactionList/TransactionList";
import TransactionForm from "./component/TransactionForm";
function App() {
  const [list, setList] = useState([]);

  return (
    <div className="container">
      <h1>Budget tracker</h1>
      <div className="balance-box">
        <h3>Saldo</h3>
        <div id="balance"></div>
      </div>
      <TransactionForm list={list} setList={setList} />
      <TransactionList list={list} />
      {/* <div>
        <canvas id="myChart"></canvas>
      </div> */}
    </div>
  );
}

export default App;
