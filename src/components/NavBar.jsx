import { NavLink } from "react-router";
import { Heart, Smartphone } from 'lucide-react';

export default function NavBar(){

  return (
    <>
    <div className="flex h-[50px] border-b items-center py-[35px]">
      <ul className="flex">
        <li className="ml-[25px]">
          <Smartphone 
          size={40}/>
        </li>
        <li>
          <h1 className="flex text-[24px] ml-[20px]">
            <NavLink to="/">
             PhoneArena
            </NavLink>
            </h1>
        </li>

      </ul>
        <ul className="flex justify-end w-[100%] gap-5">
          {/* logo */}
            <li
            className="">
              <NavLink to="/">Smartphone</NavLink>
            </li>
            {/* favorite */}
            <li
            className="">
              <NavLink><Heart/></NavLink>
              </li>
            <li
            className="mr-[25px]"
            ><NavLink>Comparatore</NavLink></li>
        </ul>
    </div>
  </>
  )
}