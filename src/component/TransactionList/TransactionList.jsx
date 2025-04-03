import "./TransactionList.css";
import { useState, useContext } from "react";
import BudgetAppProvider, {
  BudgetAppContext,
} from "../../context/BudgetAppContext";
import Transaction from "../Transaction";
import Confirmation from "../Confirmation/Confirmation";
export default function TransactionList({ list, setAmount, setList }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const { state, dispatch } = useContext(BudgetAppContext);

  const handleDeleteClick = (transaction, index) => {
    transaction = { ...transaction, index };
    setTransactionToDelete(transaction);
    setShowConfirmation(true);
  };

  const handleDelete = () => {
    if (transactionToDelete) {
      dispatch({
        type: "delete_transaction",
        payload: {
          index: transactionToDelete.index,
          amount: transactionToDelete.amount,
        },
      });
    }
    setShowConfirmation(false);
    setTransactionToDelete(null);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    setTransactionToDelete(null);
  };
  return (
    <div>
      <h3>Transactions</h3>
      <ul id="transaction-list">
        {state.transactions.map((item, index) => (
          <Transaction
            key={item.description + item.amount + index}
            item={item}
            handleDelete={() => handleDeleteClick(item, index)}
          />
        ))}
      </ul>
      <Confirmation
        isOpen={showConfirmation}
        onConfirm={handleDelete}
        onCancel={handleCancel}
      />
    </div>
  );
}
