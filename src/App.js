import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

// Will learn:
// 1. Local state vs Global state
// 2. Prop drilling
// 3. Lifting state up
// 4. Context API vs Redux
// 5. useContext React hook
// 6. useReducer React hook

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
