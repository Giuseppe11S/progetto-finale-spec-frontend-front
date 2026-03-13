import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"
import {Heart} from "lucide-react"

import { Link } from "react-router-dom"
import SmartPhoneCard from "../components/SmartPhoneCard"

export default function FavoritePage() {
  const { favorites } = useContext(FavoritesContext)

  return (
    <>
    <div className="flex flex-col items-center mt-[40px]">
      <h1 className="text-[35px] mb-[5px] font-semibold ">I tuoi <span className="text-cyan-500">Preferiti</span></h1>
      <span className="mb-[30px] text-gray-400"> {favorites.length} Dispositivi trovati</span>
    </div>
      <div className="flex flex-wrap gap-[30px] mt-[50px] px-[40px]">
        {favorites.map(s => <SmartPhoneCard key={s.id} {...s} />)}
      </div>
      {favorites.length === 0 ? <EmptyFavorites/> : null}
    </>
  )
}

// in case of empty states for favorites
function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      
      <div className="bg-red-100 p-[30px] rounded-[24px]">
        <Heart className="text-red-400" size={50} />
      </div>

      <div className="text-center">
        <h2 className="text-[22px] font-bold text-gray-800">Nessun preferito ancora</h2>
        <p className="text-gray-400 mt-[8px]">Aggiungi smartphone ai preferiti per ritrovarli qui</p>
      </div>

      <Link to="/">
        <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-[60px]
         py-[15px] rounded-[12px] font-semibold mt-[10px] cursor-pointer
         flex items-center gap-2 hover:opacity-90 transition">
          ← Esplora smartphone
        </button>
      </Link>

    </div>
  )
}