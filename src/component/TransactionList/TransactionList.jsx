import "./TransactionList.css";
import { useState } from "react";
import BudgetAppProvider, {
  BudgetAppContext,
} from "../../context/BudgetAppContext";
import Transaction from "../Transaction";
import Confirmation from "../Confirmation/Confirmation";
export default function TransactionList({ list, setAmount, setList }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { state, dispatch } = useContext(BudgetAppContext);
  const handleDelete = async (description, sum) => {
    dispatch({
      type: "delete_transaction",
      payload: { description: description, amount: sum },
    });
  };

  return (
    <div>
      <h3>Transactions</h3>
      <ul id="transaction-list">
        {list.map((item, index) => (
          <Transaction index={index} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
      {showConfirmation && <Confirmation handleDelete={handleDelete} />}
    </div>
  );
}
