import BudgetAppProvider, {
  BudgetAppContext,
} from "../context/BudgetAppContext";
import { useContext } from "react";
export default function TransactionForm() {
  const { state, dispatch } = useContext(BudgetAppContext);
  function handleSubmit(e) {
    e.preventDefault();
    const description = e.target.description.value;
    const amount = Number(e.target.sum.value);
    dispatch({
      type: "add_transaction",
      payload: {
        description,
        amount,
      },
    });
    e.target.reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Example: S-market"
          required
        />
        <label htmlFor="sum">Sum:</label>
        <input
          type="text"
          id="sum"
          name="sum"
          placeholder="Example: -50 or +100"
          required
        />
        <button type="submit" id="addTransaction">
          Add Transaction
        </button>
      </form>
    </>
  );
}
