import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  // Action is an object that has type and payload
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const moneyFormatter = (num) => {
    // display whole number + 2 decimals so we use toFixed(2)
    // we want to add . between whole number and decimal
    let p = num.toFixed(2).split(".");
    // test 23123
    return (
      "$ " +
      p[0]
        .split("")
        .reverse()
        .reduce((acc, num, i, orig) => {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        moneyFormatter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
