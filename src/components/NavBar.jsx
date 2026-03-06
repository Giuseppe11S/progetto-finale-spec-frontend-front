import { Link } from "react-router";
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
          <h1 className="flex text-[24px] ml-[20px]">PhoneArena</h1>
        </li>

      </ul>
        <ul className="flex justify-end w-[100%] gap-5">
          {/* logo */}
            <li
            className="">
              <Link to="/">Smartphone</Link>
            </li>
            {/* favorite */}
            <li
            className="">
              <Link><Heart/></Link>
              </li>
            <li
            className="mr-[25px]"
            ><Link>Comparatore</Link></li>
        </ul>
    </div>
  </>
  )
}