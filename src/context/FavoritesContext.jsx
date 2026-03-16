import { createContext, useState } from "react";
import { useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState([]);

  // saving in localstorae
    useEffect(() => {
      const saved = localStorage.getItem('favorites')
      // if exits convert it and update the state
      saved ? setFavorites(JSON.parse(saved)) : null
    }, [])

    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]) 

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}