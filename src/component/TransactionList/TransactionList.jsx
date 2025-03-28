import "./TransactionList.css";
import { useState } from "react";
import Transaction from "../Transaction";
import Confirmation from "../Confirmation/Confirmation";
export default function TransactionList({ list, setAmount, setList }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async (item, sum) => {
    try {
      setShowConfirmation(true);
      let updatedList = list.filter((i) => {
        return i !== item;
      });

      setAmount((prev) => prev - sum);
      setList(updatedList);
    } catch (error) {
      console.log(error);
    }
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
