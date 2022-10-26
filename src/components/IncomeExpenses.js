import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// import { moneyFormatter } from "./Transaction";

// const moneyFormatter = (num) => {
//   // display whole number + 2 decimals so we use toFixed(2)
//   // we want to add . between whole number and decimal
//   let p = num.toFixed(2).split(".");
//   return (
//     "$ " +
//     p[0]
//       .split("")
//       .reverse()
//       .reduce((acc, num, i, orig) => {
//         return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
//       }, "") +
//     "." +
//     p[1]
//   );
// };

const IncomeExpenses = () => {
  const { transactions, moneyFormatter } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  // logic for income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  // logic for expense
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
