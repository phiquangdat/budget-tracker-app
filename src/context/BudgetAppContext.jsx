import { createContext, useContext } from "react";
import { useReducer } from "react";

export const BudgetAppContext = createContext();
const initialState = {
  transactions: [],
  sum: 0,
  theme: "light",
  currency: "€",
};
function reducer(state, action) {
  switch (action.type) {
    case "add_transaction":
      return {
        ...state,
        sum: state.sum + action.payload.amount,
        transactions: [...state.transactions, action.payload],
      };
    case "delete_transaction":
      return {
        ...state,
        sum: state.sum - action.payload.amount,
        transactions: state.transactions.filter(
          (_, idx) => idx != action.payload.index
        ),
      };
    case "set_theme":
      return { ...state, theme: action.payload };
    case "set_currency":
      return { ...state, currency: action.payload };
  }
}
export default function BudgetAppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BudgetAppContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetAppContext.Provider>
  );
}
