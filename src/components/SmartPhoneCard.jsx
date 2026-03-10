import { Heart, GitCompareArrows } from "lucide-react"
import { Link } from "react-router-dom"

// layout of cards 

export default function SmartPhoneCard({title, category, id, brand, price, ram, display, battery, storage, releaseYear }) {

  // background color and text color for badge 
  const badgeColor = {
    flagship: 'bg-violet-100 text-violet-700',
    midrange: 'bg-blue-100 text-blue-700',
    budget: 'bg-green-100 text-green-700'
  }

  return (
    <>
    <div className="rounded-[15px] border border-gray-300 pt-[20px] pb-[20px] pl-[10px] flex flex-col pr-[10px]
    shadow-sm
    sm:w-1/2
    lg:w-1/4">
      <div className="flex justify-between mb-[10px]">
        <span className={`${badgeColor[category]} px-[9px] font-semibold py-[4px] rounded-[10px] text-[13px]`}>{category}</span>
        <ul className="flex gap-4">
          <li className="cursor-pointer text-gray-500">
            <Heart 
            size={18}
            />
            </li>
          <li className="cursor-pointer text-gray-500">
            <GitCompareArrows 
            size={18}/>
          </li>
        </ul>
      </div>
  
    <div className="ml-[8px]">
        <span className="text-[12px] font-semibold text-gray-400 tracking-[1px]">{brand.toUpperCase()}</span>
        <h2 className="text-[19px] font-semibold ">{title}</h2>

        <div className="flex justify-between mt-[5px] items-center">
          <h3 className="text-[21px]">€{price}</h3>
          <span className="text-[14px] text-gray-500">{releaseYear}</span>
        </div>

        {/* Specifcs of products*/}
        <div className="flex flex-wrap justify-center mt-[5px]"> 
          <span className="w-1/2 text-[13px]">{ram} <span className="text-gray-500">RAM</span></span>
          <span className="w-1/2 text-[13px]">{storage} <span className="text-gray-500">SPAZIO</span></span>
          <span className="w-1/2 text-[13px]">{battery} <span className="text-gray-500">mAh</span></span>
          <span className="w-1/2 text-[13px]">{display}"</span>
        </div>

        <Link to={`/smartphone/${id}`}> 
          <button className="border border-gray-300 py-[10px] w-[100%] cursor-pointer rounded-[6px] mt-[30px] 
          hover:bg-gray-200 transition-all duration-300">
            Dettagli <span className="ml-[5px]">&rarr;</span>
          </button>
        </Link>
        </div>
    </div>
    </>
  )
}
