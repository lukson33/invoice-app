import React, { useState, createContext } from "react";
import startData from "../data/data.json";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
  //set cart context
  const [data, setData] = useState(startData);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
