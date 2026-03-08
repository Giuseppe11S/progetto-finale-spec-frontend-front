import { useState } from "react"

export default function SearchBar({ updateSearch }){

  return (
    <>
      <div className="mt-[50px] border">
        <h1>Tutti gli SmartPhone</h1>
        <input 
        className="border mt-[25px]"
        type="text" 
        onChange={updateSearch}/>
      </div>
    </>
  )
}