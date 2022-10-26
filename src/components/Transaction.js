import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// export const moneyFormatter = (num) => {
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

const Transaction = ({ transaction }) => {
  const { deleteTransaction, moneyFormatter } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign} {moneyFormatter(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
