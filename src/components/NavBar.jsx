import { NavLink } from "react-router";
import { Heart, Smartphone, GitCompareArrows  } from 'lucide-react';
import { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { CompareContext } from "../context/CompareContext";

export default function NavBar(){

  const { favorites } = useContext(FavoritesContext);
  const { compares } = useContext(CompareContext);

  return (
    <>
    <div className="flex justify-around py-[20px] items-center nav-bg shadow-sm">

      <ul className="flex items-center">
        <li className="ml-[25px] bg-cyan-500 text-white rounded-xl p-[5px]">
          <Smartphone 
          size={25}/>
        </li>
        <li>
          <h1 className="flex text-[22px] font-semibold text-cyan-500 ml-[20px]">
            <NavLink to="/">
             PhoneArena
            </NavLink>
            </h1>
        </li>

      </ul>
        <ul className="flex gap-5 ">
          {/* logo */}
            <li
            className="text-gray-400 text-[14px]">
              <NavLink to="/" className="flex items-center gap-2 px-[10px] py-[5px] rounded-xl
              focus:bg-cyan-400 focus:text-white
              transition
              duration-200">
                <Smartphone size={20}/>
                <span>Smartphone</span>
              </NavLink>
            </li>
            {/* favorite */}
            <li
            className="text-gray-400 text-[14px]">
            <NavLink to="/favorite" className="flex items-center gap-2 px-[10px] py-[5px] rounded-xl
              focus:bg-cyan-400 focus:text-white
              transition
              duration-200">
              <Heart size={20}/>
              <span>Preferiti {favorites.length === 0 ? null : favorites.length}</span>
            </NavLink>
              </li>
            <li
            className="mr-[25px] text-gray-400 text-[14px]">
            <NavLink to="/compare" className="flex items-center gap-2 px-[10px] py-[5px] rounded-xl
              focus:bg-cyan-400 focus:text-white
              transition
              duration-200">
              <GitCompareArrows  size={20}/>
              <span>Compara {compares.length === 0 ? null : compares.length}</span>
            </NavLink>
      </li>
      </ul>
    </div>
  </>
  )
}