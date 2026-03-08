import { Heart, GitCompareArrows } from "lucide-react"
import { Link } from "react-router-dom"

export default function SmartPhoneCard({title, category, id }) {
  return (
    <>
    <div className="rounded-[15px] border w-[40%] p-[20px]">
      <div className="flex justify-between ">
        <span>{category}</span>
        <ul className="flex gap-4">
          <li className="cursor-pointer"><Heart /></li>
          <li className="cursor-pointer"><GitCompareArrows /></li>
        </ul>
      </div>
      <h2>{title}</h2>
     <Link to={`/smartphone/${id}`}> <button className="text-center px-[50px] border w-[100%] cursor-pointer rounded-[6px]">
         Dettagli
      </button>
      </Link>
    </div>
    </>
  )
}
