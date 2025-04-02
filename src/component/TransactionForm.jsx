import BudgetAppProvider, {
  BudgetAppContext,
} from "../context/BudgetAppContext";
import { useContext } from "react";
export default function TransactionForm() {
  const {state} = useContext(BudgetAppContext);

  return <p>{state.sum}</p>;
}
