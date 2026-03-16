import { createContext, useState, useEffect } from "react";

export const CompareContext = createContext();

export function CompareProvider({ children }) {

  const [compares, setCompares] = useState([]);

  // saving in localstorae
  useEffect(() => {
    const saved = localStorage.getItem('compares')
     // if exits convert it and update the state
    saved ? setCompares(JSON.parse(saved)) : null
   }, [])

  useEffect(() => {
    localStorage.setItem('compares', JSON.stringify(compares))
  }, [compares])

  return (
    <CompareContext.Provider value={{ compares, setCompares }}>
      {children}
    </CompareContext.Provider>
  )
}