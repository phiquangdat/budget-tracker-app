import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import BudgetAppProvider from "./context/BudgetAppContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BudgetAppProvider>
      <App />
    </BudgetAppProvider>
  </StrictMode>
);
