import { useState } from 'react';
import './App.css'
import './component/TransactionList/TransactionList.jsx';
import './component/TransactionForm.jsx';
import TransactionList from './component/TransactionList/TransactionList.jsx';
import TransactionForm from './component/TransactionForm.jsx';
function App() {
  const [list, setList] = useState([]);
  
  return (
      <div className="container">
        <h1>Budget tracker</h1>
        <div className="balance-box">
            <h3>Saldo</h3>
            <div id="balance"></div>
        </div>
        <TransactionForm list={list} setList={setList}/>
    <div>
        <canvas id="myChart"></canvas>
    </div>
    </div>
  );
}

export default App
