import { BudgetAppContext } from "../context/BudgetAppContext";
import { useContext } from "react";
export default function Transaction({ item, handleDelete }) {
  const { state } = useContext(BudgetAppContext);
  return (
    <li className={item.amount > 0 ? "income" : "expense"}>
      <p className="description">{item.description}</p>
      <p className="sum">
        {item.amount} {state.currency}
      </p>
      <button className="delete" onClick={handleDelete}>
        Poista
      </button>
    </li>
  );
}
