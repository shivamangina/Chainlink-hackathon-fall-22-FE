/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import AppReducer from "./reducer";
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setLoading(data) {
    dispatch({
      type: "SET_LOADING",
      payload: data,
    });
  }

  const value = {
    ...state,
    setLoading,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
