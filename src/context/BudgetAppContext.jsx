import { createContext, useContext } from "react";
import { useReducer } from "react";

export const BudgetAppContext = createContext();

function reducer(state, action) {
  if (action.type == "add_transaction") {
    return {
      ...state,
      sum: state.sum + action.payload.amount,
      transactions: [...state.transactions, action.payload],
    };
  } else if (action.type == "delete_transaction") {
    return {
      ...state,
      sum: state.sum - action.payload.amount,
      transactions: state.transactions.filter(
        (tran) => tran.description != action.payload.description
      ),
    };
  }
}
export default function BudgetAppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { sum: 0, transactions: [] });

  return (
    <BudgetAppContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetAppContext.Provider>
  );
}
