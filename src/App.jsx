import { useState, useRef, useContext } from "react";
import BudgetAppProvider, {
  BudgetAppContext,
} from "./context/BudgetAppContext";
import "./App.css";
import TransactionList from "./component/TransactionList/TransactionList";
import TransactionForm from "./component/TransactionForm";
import Confirmation from "./component/Confirmation/Confirmation";
import SettingsDialog from "./component/SettingsDialog/SettingsDialog";
function App() {
  const { state } = useContext(BudgetAppContext);

  const [showSettings, setShowSettings] = useState(false);
  return (
    <div
      className="container"
      style={{ backgroundColor: state.theme === "dark" ? "black" : "white" }}
    >
      <SettingsDialog
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
      <h1>Budget tracker</h1>
      <div className="balance-box">
        <h3>Saldo</h3>
        <div id="balance">
          {state.sum} {state.currency}
        </div>
      </div>
      <TransactionForm />
      <TransactionList />
      <button onClick={() => setShowSettings(true)}>Settings</button>{" "}
      {/* Toggle settings dialog */}
      {/* <div>
        <canvas id="myChart"></canvas>
      </div> */}
    </div>
  );
}

export default App;
