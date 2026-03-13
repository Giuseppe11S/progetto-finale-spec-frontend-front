import { createContext, useState } from "react";

export const CompareContext = createContext();

export function CompareProvider({ children }) {

  const [compares, setCompares] = useState([]);

  return (
    <CompareContext.Provider value={{ compares, setCompares }}>
      {children}
    </CompareContext.Provider>
  )
}