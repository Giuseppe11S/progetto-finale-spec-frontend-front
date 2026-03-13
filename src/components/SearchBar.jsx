import { useState } from "react"
import { Search, SlidersHorizontal} from "lucide-react"

export default function SearchBar({ updateSearch, amountProducts, budgetType, updateSort}){

  return (
    <>

      <div className="mt-[50px] flex flex-col items-center">
          <h1 className="text-[35px] mb-[5px] font-semibold ">Tutti gli <span className="text-cyan-500">Smartphone</span></h1>
          <span className="mb-[30px] text-gray-400"> {amountProducts} Dispositivi trovati</span>

        <div className="flex"> 
          <div className="flex border border-gray-300 rounded-xl py-[5px] px-[5px] shadow-sm
            focus-within:border-red-500 ">
            <Search 
            size={25}
            className="text-gray-500"
            />
            <input 
            className="w-[400px] ml-[10px] focus:outline-none"
            type="text" 
            placeholder="Cerca Smartphone..."
            onChange={updateSearch}/>
          </div>

          <div className="flex border rounded-xl ml-[25px] py-[5px] px-[6px] border border-gray-300 shadow-sm items-center pointer
          focus-within:border-red-500">
            <SlidersHorizontal 
            className="text-gray-500"
            size={20}/>
            <select onChange={budgetType} className="ml-[10px]  focus:outline-none ">
              <option value="">Tutte le categorie</option>
              <option value="flagship">Flagship</option>
              <option value="midrange">midrange</option>
              <option value="budget">Budget</option>
            </select>
          </div>
          
          <select onChange={updateSort} className="border rounded-xl ml-[5px] py-[5px] px-[6px] border border-gray-300 shadow-sm cursor-pointer">
            <option value="title-az">A-Z</option>
            <option value="title-za">Z-A</option>
          </select>
        </div>
      </div>
    </>
  )
}